import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import CheckOutPage from "@/components/checkout/CheckOutPage";

const page = () => {
  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <CheckOutPage />
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
};

export default page;
