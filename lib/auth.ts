import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { client } from "@/sanity/lib/client";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET as string;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await client.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email: credentials?.email }
        );

        if (!user || !credentials?.password) {
          throw new Error("Invalid email or password");
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Invalid email or password");
        }

        const accessToken = jwt.sign(
          { email: user.email, id: user._id },
          SECRET_KEY,
          { expiresIn: "7d" } // 🔹 Increase validity if needed
        );

        return { 
          id: user._id, 
          email: user.email, 
          name: user.name, 
          accessToken
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 🔹 7 days (same as JWT expiry)
  },
  callbacks: {
    async jwt({ token, user }) {
      const now = Math.floor(Date.now() / 1000); // Get current timestamp

      // If user just signed in, store fresh access token
      if (user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
          accessToken: user.accessToken,
          accessTokenExpires: now + 7 * 24 * 60 * 60, // 🔹 Store JWT expiry time
        };
      }

      // 🔹 If token expired, refresh it
      if (token.accessTokenExpires && now > token.accessTokenExpires) {
        try {
          const newAccessToken = jwt.sign(
            { email: token.email, id: token.id },
            SECRET_KEY,
            { expiresIn: "7d" }
          );
          return {
            ...token,
            accessToken: newAccessToken,
            accessTokenExpires: now + 7 * 24 * 60 * 60,
          };
        } catch (error) {
          console.error("JWT Refresh Failed:", error);
          return { ...token, error: "TokenRefreshError" };
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  secret: SECRET_KEY,
};
