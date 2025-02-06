"use client";
import HeaderNav from "../components2/headerNav/headerNav";
import AddCart from "../components2/cart/cart";
import Footer from "../components/footer/footer";

export default function Cart() {
  return (
    <div className="overflow-hidden text-[#333333] font-Inter400 bg-white">
      <HeaderNav mainHead="Shopping Cart" trackHead="Shopping cart" />
      <AddCart />
      <Footer />
    </div>
  );
}
