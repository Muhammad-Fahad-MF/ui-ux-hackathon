"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

interface FormProps {
  btnTitle: string;
  isLogin?: boolean;
}

export default function SignIn({
  isLogin = true,
  btnTitle,
}: FormProps) {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [btnText, setBtnText] = useState(btnTitle);
  const router = useRouter();
  const [remember, setRemember] = useState(false);

  // ✅ Check token on mount
  const handleFormValueChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });

  const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setBtnText("Loading...");

    try {
      const result = await signIn("credentials", {
        email: formValues.email,
        password: formValues.password,
        redirect: false, // Prevents automatic page refresh
      });

      if (result?.ok === true) {
        setBtnText("Success");
        router.push("/");
        window.location.href = "/";
      }
    } catch (error) {
      setBtnText("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="py-[120px] flex justify-center items-center bg-[#f9f9f9]">
      <div className="py-8 px-8 flex flex-col bg-white">
        <form onSubmit={handleFormSubmit}>
          <h1 className="font-HelveticaBold text-xl text-[#333333]">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>

          {/* Email Field */}
          <div className="box-border border-[#e0e0e0] border-[1px] flex items-center gap-2 w-[360px] h-[44px] py-[10px] px-4 mt-4">
            <Image
              src="/images/sign/EnvelopeSimple.svg"
              alt="E"
              height={24}
              width={24}
            />
            <input
              onChange={handleFormValueChange}
              value={formValues.email}
              className="font-Helvetica text-[#4f4f4f] focus:outline-none p-1 w-full"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="box-border border-[#e0e0e0] border-[1px] flex items-center gap-2 w-[360px] h-[44px] py-[10px] px-4 mt-4">
            <Image src="/images/sign/Lock.svg" alt="P" height={24} width={24} />
            <input
              onChange={handleFormValueChange}
              value={formValues.password}
              className="font-Helvetica text-[#4f4f4f] focus:outline-none p-1 w-full"
              placeholder="Password"
              type="password"
              name="password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <label className="flex items-center cursor-pointer font-Helvetica select-none mt-4 w-fit">
            <input
              type="checkbox"
              className="hidden"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <span className="w-5 h-5 box-border border-[1px] border-primary1 flex items-center justify-center">
              {remember && (
                <span className="text-white text-[14px] bg-primary1 h-full w-full flex justify-center items-center">
                  ✔
                </span>
              )}
            </span>
            <span className="ml-2 font-Helvetica text-[14px] text-[#333333]">
              Remember me?
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full h-[44px] bg-primary1 text-white font-Helvetica hover:opacity-85 active:brightness-75"
          >
            {btnText}
          </button>
        </form>
        <div className="flex justify-between">
          <Link
            href="/signUp"
            className="text-[#828282] font-Helvetica text-[14px] mt-4"
          >
            Not registered?
          </Link>
          {/* Forgot Password */}
          <Link
            href="#"
            className="text-[#828282] font-Helvetica text-[14px] mt-4 "
          >
            Forgot password?
          </Link>
        </div>

        {/* OR Divider */}
        <div className="mt-8 flex items-center">
          <span className="w-[168px] h-[1px] bg-[#e0e0e0]"></span>
          <span className="border-[1px] border-[#e0e0e0] p-1 text-center text-[#4f4f4f] text-[14px]">
            OR
          </span>
          <span className="w-[168px] h-[1px] bg-[#e0e0e0]"></span>
        </div>

        {/* Social Login (Disabled for now) */}
        <button
          className="box-border border-[1px] border-[#e0e0e0] text-[#4f4f4f] grid grid-cols-[20px_1fr] items-center h-[44px] w-full px-4 mt-4 opacity-50 cursor-not-allowed"
          disabled
        >
          <Image src="/images/sign/Google.svg" alt="G" height={20} width={20} />
          <p className="font-Helvetica text-center">
            Google Login (Coming Soon)
          </p>
        </button>

        <button
          className="box-border border-[1px] border-[#e0e0e0] text-[#4f4f4f] grid grid-cols-[20px_1fr] items-center h-[44px] w-full px-4 mt-4 opacity-50 cursor-not-allowed"
          disabled
        >
          <Image src="/images/sign/Apple.svg" alt="I" height={20} width={20} className="h-auto w-auto" />
          <p className="font-Helvetica text-center">
            Apple Login (Coming Soon)
          </p>
        </button>
      </div>
    </div>
  );
}
