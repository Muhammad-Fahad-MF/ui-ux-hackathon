// Force this route to run in the Node.js runtime
export const runtime = "nodejs";

import { client } from "@/sanity/lib/client";
import { NextResponse, type NextRequest } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET as string;

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();

    // Fetch user from Sanity
    const users = await client.fetch(
      `*[ _type == "user" && email == "${email}" ]{
          username,
          email,
          password 
      }`
    );

    if (!users || users.length === 0) {
      return NextResponse.json(
        { message: "Invalid Email Address or Password" },
        { status: 400 }
      );
    }

    const validDetails = users[0];

    // Ensure the user record has a password field
    if (!validDetails.password) {
      return NextResponse.json(
        { message: "Invalid Email Address or Password" },
        { status: 400 }
      );
    }

    // Compare the provided password with the stored hash
    const passCheck = await bcrypt.compare(password, validDetails.password);

    if (!passCheck) {
      return NextResponse.json(
        { message: "Invalid Email Address or Password" },
        { status: 400 }
      );
    }

    // If credentials are valid, sign a JWT token
    if (email === validDetails.email && passCheck) {
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "7d" });

      // Create a response and set the token as an HTTP-only cookie
      const res = NextResponse.json(
        { message: "Logged in Successfully!" },
        { status: 200 }
      );

      res.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
      });

      return res;
    }
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { message: "Failed to login", error },
      { status: 500 }
    );
  }
};
