"use client";
import { useRouter } from "next/navigation";
import Footer from "../components/footer/footer";
import HeaderNav from "../components2/headerNav/headerNav";
import SignIn from "../components2/sign-in/sign-in";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

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
      <HeaderNav mainHead="Sign In" trackHead="sign in" />
      <SignIn
        btnTitle="Sign In"
      />
      <Footer />
    </div>
  );
}
