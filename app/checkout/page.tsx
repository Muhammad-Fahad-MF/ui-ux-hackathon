"use client";

import HeaderNav from "../components2/headerNav/headerNav";
import Footer from "../components/footer/footer";
import MainCheckout from "../components2/checkout/checkout";
export default function Checkout() {
  return (
    <div className="overflow-hidden bg-white font-Helvetica text-[#333333]">
        <HeaderNav mainHead="Cheekout Page" trackHead="Cheekout"/>
        <MainCheckout/>
        <Footer/>
    </div>
  )
}
