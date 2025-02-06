"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function SessionRefresher() {
  const {  status, update } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      const interval = setInterval(() => {
        update(); // 🔹 Refresh session every 5 minutes
      }, 1000 * 60 * 5);
      return () => clearInterval(interval);
    }
  }, [status, update]);

  return null; // No UI needed
}
