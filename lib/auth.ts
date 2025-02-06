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

        const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY, { expiresIn: "7d" });

        return { 
          id: user._id, 
          email: user.email, 
          name: user.name, 
          token  // Now valid due to extended User type
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.token; // Valid due to JWT type extension
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email as string;
        session.user.accessToken = token.accessToken; // Valid due to Session type extension
      }
      return session;
    },
  },
  secret: SECRET_KEY,
};