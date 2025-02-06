import bcrypt from "bcrypt";
import { signUpSchema } from "@/validation/signup-schema";
import { NextResponse, type NextRequest } from "next/server";
import { client } from "@/sanity/lib/client";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const result = await signUpSchema.safeParseAsync(data);
  if (result.success == false) {
    return NextResponse.json(
      { message: "Validation Error", errors: result.error },
      { status: 400 }
    );
  }

  const roundSalt = await bcrypt.genSalt(11);
  const hashPassword = await bcrypt.hash(data?.password, roundSalt);
  try {
    const newUser = await client.create({
      _type: "user",
      username: data.username,
      email: data.email,
      password: hashPassword,
    });
    return NextResponse.json({ message: "Succes", newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create user",error },
      { status: 500 }
    );
  }
};
