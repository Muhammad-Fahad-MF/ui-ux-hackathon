"use client";
import Image from "next/image";
import Link from "next/link";
import CartCard from "./cartCard/cartCard";
import { useCart } from "@/context/cartContext";

export default function AddCart() {

  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="mx-[300px] my-[119px] flex flex-col gap-8 max-sm:mx-5 max-sm:my-14 max-lp:mx-5">
       <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 mb-4">
                <Image src={item.imageUrl} alt={item.name} width={80} height={80} />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            className="bg-red-500 text-white px-4 py-2 mt-4"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
      <section className="max-sm:flex max-sm:flex-col max-sm:items-center">
        <span className="flex ml-[1px] max-sm:mb-6">
          <h3 className="font-Inter700 text-[18px] leading-[26px] max-sm:text-3xl">Product</h3>
          <h3 className="font-Inter700 text-[18px] leading-[26px] ml-[29.1%] max-sm:hidden">
            Price
          </h3>
          <h3 className="font-Inter700 text-[18px] leading-[26px] ml-[11.1%] max-sm:hidden">
            Quantity
          </h3>
          <h3 className="font-Inter700 text-[18px] leading-[26px] ml-[13.8%] max-sm:hidden">
            Total
          </h3>
          <h3 className="font-Inter700 text-[18px] leading-[26px] px-6 ml-[11.364%] max-sm:hidden">
            Remove
          </h3>
        </span>
        <CartCard
          imgSrc="/images/cart/burger.svg"
          price="$35.00"
          total="$221.00"
          title="Burger"
        />
        <CartCard
          imgSrc="/images/cart/lime.svg"
          price="$25.00"
          total="$521.00"
          title="Fresh Lime"
        />
        <CartCard
          imgSrc="/images/cart/pizza.svg"
          price="$15.00"
          total="$421.00"
          title="Pizza"
        />
        <CartCard
          imgSrc="/images/cart/muffin.svg"
          price="$45.00"
          total="$521.00"
          title="Choco Muffin"
        />
        <CartCard
          imgSrc="/images/cart/chees.svg"
          price="$15.00"
          total="$325.00"
          title="Cheese Butter"
        />
      </section>
      <section className="flex gap-6 max-sm:flex-col">
        <div className="flex flex-col items-start gap-6">
            <h2 className="font-HelveticaBold text-[32px] leading-[40px] max-sm:text-3xl">Coupon Code</h2>
            <span className="w-full h-[188px] box-border border-[1px] border-[#e0e0e0] rounded-md px-5 py-6 space-y-6 max-sm:h-auto max-lp:w-[45vw]">
                <p className="text-[#828282] text-[18px] leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Quisque diam pellentesque bibendum non</p>
                <div className="h-[62px] w-[598px] rounded-md box-border border-[1px] border-[#e0e0e0] pl-5 flex justify-between items-center max-sm:w-full max-lp:w-full">
                  <input className="placeholder:text-[#828282] focus:outline-none" placeholder="Enter Here code"/>
                  <button className="text-[18px] leading-[26px] text-white bg-primary1 rounded-md h-[62px] w-[89px] active:opacity-80">Apply</button>
                </div>
            </span>    
        </div>
        <div className="flex flex-col justify-between  items-start  gap-6">
          <h2 className="font-HelveticaBold text-[32px] leading-[40px] max-sm:text-3xl">Total Bill</h2>
          <span className="w-full h-[185px] box-border border-[1px] border-[#bdbdbd] rounded-md py-6 max-lp:w-[45vw]">
            <div className="w-full flex justify-between px-5">
              <h3 className="font-HelveticaBold text-[20px] leading-[28px]">Cart Subtotal</h3>
              <h4 className="font-Inter700 text-[18px] leading-[26px]">$120.00</h4>
            </div>
            <div className="w-[648px] flex justify-between mt-[15px] border-b-[1px] border-[#bdbdbd] px-5 pb-6 max-lp:w-full">
              <h3 className="text-[18px] leading-[26px]">Cart Subtotal</h3>
              <h4 className="text-[18px] leading-[26px]">$120.00</h4>
            </div>
            <div className="w-full flex justify-between px-5 pt-4">
              <h3 className="font-HelveticaBold text-[20px] leading-[28px]">Total Amount</h3>
              <h4 className="font-Inter700 text-[18px] leading-[26px]">$205.00</h4>
            </div>
          </span>
          <Link href="/checkout" className="w-full h-16">
            <button className="bg-primary1 w-full h-full text-[18px] leading-[26px] text-white flex items-center justify-center gap-2 active:opacity-90">Proceed to Checkout <Image src="/images/cart/proceedCheck.svg" alt="`/" height={20} width={20}/></button>
          </Link>  
        </div>
      </section> 
    </div>
  );
}
