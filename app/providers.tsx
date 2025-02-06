"use client"; // Mark this as a Client Component

import { CartProvider } from "@/context/cartContext";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <SessionProvider>{children}</SessionProvider>
    </CartProvider>
  );
}