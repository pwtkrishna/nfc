import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import CreateProfile from "@/components/profile-create/CreateProfile";

const page = () => {
  // useEffect(() => {
  //   setSiteUrl(window.location.origin);
  // }, []);

  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <CreateProfile />
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
};

export default page;
