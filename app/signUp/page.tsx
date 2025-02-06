"use client";

import { useEffect } from "react";
import Footer from "../components/footer/footer";
import HeaderNav from "../components2/headerNav/headerNav";
import SignUp from "../components2/sign-up/sign-up";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Redirect if already logged in
    }
  }, [status, router]);

  return (
    <div className="overflow-hidden">
      <HeaderNav mainHead="Sign up" trackHead="sign up" />
      <SignUp
        btnTitle="Sign Up"
        apiUrl="http://localhost:3000/api/auth/signup"
      />
      <Footer />
    </div>
  );
}
