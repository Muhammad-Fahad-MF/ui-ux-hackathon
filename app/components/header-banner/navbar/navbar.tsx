"use client";

import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/context/cartContext";
export default function Navbar() {
  const [userName, setUserName] = useState<string>();
  const [hidden, setHidden] = useState<boolean>(false);
  const { data: session } = useSession();
  const { cart } = useCart();

  useEffect(() => {
    const getUser = async () => {
      const user = await client.fetch(
        `*[ _type == "user" && email == "${session?.user.email}"][0]{
              username,
          }`
      );
      setUserName(user?.username);
    };
    getUser();
  }, [session]);
  return (
    <div className="pt-[45px] mx-[300px] flex flex-col text-white bg-transparent items-center max-sm:mx-2 max-sm:flex-row max-sm:pt-5 max-sm:w-screen max-sm:justify-between max-lp:mx-16 max-lp:pt-6">
      <h2 className="font-HelveticaBold text-[24px] leading-[32px]">
        <code className="text-primary1 font-HelveticaBold">Food</code>tuck
      </h2>
      <section className="flex justify-between items-center w-full font-Inter400 max-sm:w-3/12">
        <ul className="font-Inter400 flex gap-8 max-sm:hidden">
          <li>
            <Link href="/" className="flex items-center flex-col">
              Home
              <div className="h-[7px] w-[7px] rounded-full bg-primary1"></div>
            </Link>
          </li>
          <li>
            <Link href="#">Menu</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              About
              <Image
                src="/images/header-banner/dropArrow.svg"
                alt="`"
                height={6}
                width={10}
                className="m-[2px]"
              />
            </Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-2 items-center">
          <span className="bg-transparent flex justify-between items-center h-[54px] w-[310px] border-[1px] border-primary1 rounded-[27px] px-[26px] max-sm:hidden">
            <input
              className="bg-transparent  placeholder:text-white placeholder:font-Inter400 focus:outline-none"
              placeholder="Search..."
            />
            <Image
              src="/images/header-banner/search.svg"
              alt="s"
              height={24}
              width={24}
              className="h-6 w-auto"
            />
          </span>
          <Link href="/shoppingCart" className="relative">
            <Image
              src="/images/header-banner/Handbag.svg"
              alt="Bag"
              height={24}
              width={24}
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
          </Link>
          <div className="relative flex items-center">
            <button onClick={() => setHidden(!hidden)}>
              <MdMenu className="max-sm:visible text-3xl ml-3 mr-2 lg:hidden" />
            </button>
            <div className="absolute top-7 left-0 max-lp:right-0 max-lp:left-auto">
              {hidden && (
                <div className="bg-zinc-700 p-2 flex flex-col  rounded-xl ">
                  <div className="border-b-[1px] border-[#e0e0e0] py-3 px-2 text-center">
                    Welcome! {userName?.split(" ").slice(0, 1).join(" ")}
                  </div>
                  <div className="border-b-[1px] border-[#e0e0e0] py-3 px-2 text-center">
                    {session?.user.email}
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="bg-red-700  text-[#ffffff] py-2 mt-2 px-2 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
