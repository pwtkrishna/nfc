"use client";
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const CheckoutSuccessPage = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-green-500 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-white">Thank you for your order.</p>
        {/* Add more order details or navigation as needed */}
      </div>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
};

export default CheckoutSuccessPage;
