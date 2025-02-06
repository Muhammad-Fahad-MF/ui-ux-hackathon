import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET,
  });

  // Redirect to login if no token (unauthenticated)
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|login|signUp|studio|admin-login|_next/static|_next/image|favicon.ico|images|fonts|logo.png).*)"],
};