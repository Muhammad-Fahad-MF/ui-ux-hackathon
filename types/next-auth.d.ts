import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name?: string;
    accessToken: string; // 🔹 Ensuring accessToken exists
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      accessToken: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    accessToken: string;
    accessTokenExpires: number; // 🔹 Added to track JWT expiry
  }
}
