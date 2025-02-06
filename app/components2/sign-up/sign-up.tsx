"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface formProps {
  btnTitle: string;
  isLogin?: boolean;
  apiUrl: string;
}

function SignUp(props: formProps) {
  const router = useRouter();
  const [btnText, setBtnText] = useState(props.btnTitle);
  const [remember, setRemember] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleFormValueChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });

  const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setBtnText("Loading...");
    try {
      const response = await fetch(props.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const result = await response.json();
      if (result.message == "Success") {
        setBtnText("Success");
        const redirectPath = "/login";
        router.push(redirectPath);
      }else {
        setBtnText(result.message)
      }
    } catch (error) {
      setBtnText("Something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="py-[120px] flex justify-center items-center bg-[#f9f9f9]">
      <div className="py-8 px-8 flex flex-col bg-white">
        <form onSubmit={handleFormSubmit}>
          <h1 className="font-HelveticaBold text-xl text-[#333333]">Sign Up</h1>
          <div className="box-border border-[#e0e0e0] border-[1px] flex items-center gap-2 w-[360px] h-[44px] py-[10px] px-4 mt-8">
            <Image src="/images/sign/user.svg" alt="U" height={24} width={24} />
            <label htmlFor="username" className=" w-[80%]">
              <input
                onChange={handleFormValueChange}
                value={formValues.username}
                className="font-Helvetica text-[#4f4f4f] focus:outline-1 focus:outline focus:outline-neutral-600 focus:outline-offset-1 p-1 placeholder:text-[#4f4f4f] w-full"
                placeholder="Name"
                type="text"
                name="username"
              />
            </label>
          </div>
          <div className="box-border border-[#e0e0e0] border-[1px] flex items-center gap-2 w-[360px] h-[44px] py-[10px] px-4 mt-4">
            <Image
              src="/images/sign/EnvelopeSimple.svg"
              alt="E"
              height={24}
              width={24}
            />
            <label htmlFor="email" className=" w-[80%]">
              <input
                onChange={handleFormValueChange}
                value={formValues.email}
                className="font-Helvetica text-[#4f4f4f] focus:outline-1 focus:outline focus:outline-neutral-600 focus:outline-offset-1 p-1 placeholder:text-[#4f4f4f] w-full"
                placeholder="Email"
                type="email"
                name="email"
              />
            </label>
          </div>
          <div className="box-border border-[#e0e0e0] border-[1px] flex items-center gap-2 w-[360px] h-[44px] py-[10px] px-4 mt-4">
            <Image src="/images/sign/Lock.svg" alt="P" height={24} width={24} />
            <label htmlFor="password" className=" w-[80%]">
              <input
                onChange={handleFormValueChange}
                name="password"
                value={formValues.password}
                className="font-Helvetica text-[#4f4f4f] focus:outline-1 focus:outline focus:outline-neutral-600 focus:outline-offset-1 p-1 placeholder:text-[#4f4f4f] w-full"
                placeholder="Password"
                type="password"
              />
            </label>
          </div>
          <label className="flex items-center cursor-pointer font-Helvetica select-none mt-4 w-fit">
            <input className="hidden" type="checkbox" />
            <span
              className={`w-5 h-5 box-border border-[1px] border-primary1 flex items-center justify-center`}
              onClick={() => setRemember(true)}
            >
              {remember && (
                <span className="text-white text-[14px] pt-[0.5px] bg-primary1 h-full w-full flex justify-center items-center">
                  ✔
                </span>
              )}
            </span>
            <span className="ml-2 font-Helvetica text-[14px] leading-[22px] text-[#333333]">
              Remember me?
            </span>
          </label>
          <button className="mt-8 w-full h-[44px] bg-primary1 text-white font-Helvetica hover:opacity-85 active:brightness-75">
            {btnText}
          </button>
        </form>
        <Link
          href="#"
          className="text-[#828282] font-Helvetica text-[14px] leading-[22px] mt-4 self-end active:brightness-75"
        >
          Forget password?
        </Link>
        <div className="mt-8 flex-col gap-4">
          <div className="flex items-center">
            <span className="w-[168px] h-[1px] bg-[#e0e0e0]"></span>
            <span className="box-border border-[1px] border-[#e0e0e0] p-1 text-center font-Helvetica text-[#4f4f4f] text-[14px] leading-[22px]">
              OR
            </span>
            <span className="w-[168px] h-[1px] bg-[#e0e0e0]"></span>
          </div>
          <button className="box-border border-[1px] border-[#e0e0e0] text-center text-[#4f4f4f] grid grid-cols-[20px_1fr] items-center h-[44px] w-full px-4 mt-4">
            <Image
              src="/images/sign/Google.svg"
              alt="G"
              height={20}
              width={20}
              className=""
            />
            <p className="font-Helvetica text-center">Sign up with Google</p>
          </button>
          <button className="box-border border-[1px] border-[#e0e0e0] text-center text-[#4f4f4f] grid grid-cols-[20px_1fr] items-center h-[44px] w-full px-4 mt-4">
            <Image
              src="/images/sign/Apple.svg"
              alt="I"
              height={20}
              width={20}
              className="h-auto w-auto"
            />
            <p className="font-Helvetica text-center">Sign up with Apple</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
