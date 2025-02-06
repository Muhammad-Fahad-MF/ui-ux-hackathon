"use client";

import HeaderNav from "../components2/headerNav/headerNav";
import MainShop from "../components2/mainShop/mainShop";
import Footer from "../components/footer/footer";
export default function Shop() {
  return (
    <div className="bg-white text-[#333333] font-Inter400 overflow-hidden">
      <HeaderNav mainHead="Our Shop" trackHead="Shop" />
      <MainShop />
      <Footer />
    </div>
  );
}
