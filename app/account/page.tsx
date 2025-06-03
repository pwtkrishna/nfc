import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import OrderDetailsPage from "@/components/order-details/OrderDetailsPage";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <OrderDetailsPage />
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
};

export default page;
