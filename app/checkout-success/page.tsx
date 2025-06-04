import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import CheckouSuccess from "@/components/checkout/CheckouSuccess";

const page = () => {
  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <CheckouSuccess />
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
};

export default page;
