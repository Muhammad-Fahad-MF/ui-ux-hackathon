"use client";

import CartCard from "./cartCard/cartCard";
import { useCart } from "@/context/cartContext";
import { useEffect, useState } from "react";
import CheckoutButton from "@/components/CheckoutButton";

export default function AddCart() {
  const [total, setTotal] = useState<number>(0);
  const { cart, clearCart } = useCart();
  useEffect(()=>{
    const newTotal = cart.reduce((acc, item)=> acc + item.price * item.quantity,0);
    setTotal(newTotal)
  },[cart]);
  return (
    <div className="mx-[300px] my-[119px] flex flex-col gap-8 max-sm:mx-5 max-sm:my-14 max-lp:mx-5">
      {cart.length === 0 ? (
        <h2 className="text-4xl text-center font-HelveticaBold text-red-700 py-[120px]">
          Cart is Empty!
        </h2>
      ) : (
        <section className=" max-sm:items-center w-full flex flex-col">
          <span className="grid grid-cols-[34%_1fr_1fr_1fr_1fr] w-full ml-[1px] items-center mb-8 pb-3 border-b-[1px] border-[#1c1b1b] max-sm:mb-6">
            <h3 className="font-Inter700 text-[18px] leading-[26px] max-sm:text-3xl">
              Product
            </h3>
            <h3 className="font-Inter700 text-[18px] leading-[26px] max-sm:hidden">
              Price
            </h3>
            <h3 className="font-Inter700 text-[18px] leading-[26px]  max-sm:hidden">
              Quantity
            </h3>
            <h3 className="font-Inter700 text-[18px] leading-[26px] max-sm:hidden">
              Total
            </h3>
            <h3 className="font-Inter700 text-[18px] leading-[26px] px-6 max-sm:hidden text-center">
              Remove
            </h3>
          </span>
          <div>
            {cart.map((item) => (
              <CartCard
                key={item.id}
                id={item.id}
                imgSrc={item.imageUrl}
                price={`$${item.price}.00`}
                total={`$${item.price * item.quantity}.00`}
                quantity={item.quantity}
                title={item.name}
              />
            ))}
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 mt-4 self-end"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </section>
      )}
      {cart.length !== 0 && (
        <section className="flex gap-6 max-sm:flex-col">
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-HelveticaBold text-[32px] leading-[40px] max-sm:text-3xl">
              Coupon Code
            </h2>
            <span className="w-full h-[188px] box-border border-[1px] border-[#e0e0e0] rounded-md px-5 py-6 space-y-6 max-sm:h-auto max-lp:w-[45vw]">
              <p className="text-[#828282] text-[18px] leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Quisque diam pellentesque bibendum non
              </p>
              <div className="h-[62px] w-[598px] rounded-md box-border border-[1px] border-[#e0e0e0] pl-5 flex justify-between items-center max-sm:w-full max-lp:w-full">
                <input
                  className="placeholder:text-[#828282] focus:outline-none"
                  placeholder="Enter Here code"
                />
                <button className="text-[18px] leading-[26px] text-white bg-primary1 rounded-md h-[62px] w-[89px] active:opacity-80">
                  Apply
                </button>
              </div>
            </span>
          </div>
          <div className="flex flex-col justify-between  items-start  gap-6">
            <h2 className="font-HelveticaBold text-[32px] leading-[40px] max-sm:text-3xl">
              Total Bill
            </h2>
            <span className="w-full h-[185px] box-border border-[1px] border-[#bdbdbd] rounded-md py-6 max-lp:w-[45vw]">
              <div className="w-full flex justify-between px-5">
                <h3 className="font-HelveticaBold text-[20px] leading-[28px]">
                  Cart Subtotal
                </h3>
                <h4 className="font-Inter700 text-[18px] leading-[26px]">
                  {`$${total}.00`}
                </h4>
              </div>
              <div className="w-[648px] flex justify-between mt-[15px] border-b-[1px] border-[#bdbdbd] px-5 pb-6 max-lp:w-full">
                <h3 className="text-[18px] leading-[26px]">Shipping Charge</h3>
                <h4 className="text-[18px] leading-[26px]">$00.00</h4>
              </div>
              <div className="w-full flex justify-between px-5 pt-4">
                <h3 className="font-HelveticaBold text-[20px] leading-[28px]">
                  Total Amount
                </h3>
                <h4 className="font-Inter700 text-[18px] leading-[26px]">
                  {`$${total}.00`}
                </h4>
              </div>
            </span>
            <CheckoutButton products={cart}/>
          </div>
        </section>
      )}
    </div>
  );
}
