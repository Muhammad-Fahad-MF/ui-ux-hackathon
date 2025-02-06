"use client";

import { useState } from "react";
import Image from "next/image";
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
export default function CheckoutButton({ products }: { products: CartItem[] }) {
  const [loading, setLoading] = useState(false);
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert("Payment failed!");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-primary1 w-full h-16 text-[18px] leading-[26px] text-white flex items-center justify-center gap-2 active:opacity-90"
    >
      {loading ? (
        "Processing..."
      ) : (
        <>
          Proceed to Checkout{" "}
          <Image
            src="/images/cart/proceedCheck.svg"
            alt="`/"
            height={20}
            width={20}
          />
        </>
      )}
    </button>
  );
}
