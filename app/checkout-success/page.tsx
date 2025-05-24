"use client";
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

const CheckoutSuccessPage = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold text-green-500 mb-4">
        Payment Successful!
      </h1>
      <p className="text-lg text-white">Thank you for your order.</p>
      {/* Add more order details or navigation as needed */}
    </div>
  );
};

export default CheckoutSuccessPage;
