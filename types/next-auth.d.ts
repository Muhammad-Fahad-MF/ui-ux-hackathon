import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    token?: string;
  }
  interface Session {
    user: {
      id?: string;
      email?: string;
      name?: string;
      accessToken?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    accessToken?: string;
  }
}