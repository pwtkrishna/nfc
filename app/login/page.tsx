import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import LoginPage from "@/components/login/LoginPage";

const page = () => {
  // const validateForm = () => {
  //   let valid = true;
  //   const newErrors = { ...errors };

  //   if (!formData.email) {
  //     newErrors.email = "Email is required";
  //     valid = false;
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Please enter a valid email address";
  //     valid = false;
  //   } else {
  //     newErrors.email = "";
  //   }

  //   if (!formData.password) {
  //     newErrors.password = "Password is required";
  //     valid = false;
  //   } else if (formData.password.length < 6) {
  //     newErrors.password = "Password must be at least 6 characters";
  //     valid = false;
  //   } else {
  //     newErrors.password = "";
  //   }

  //   setErrors(newErrors);
  //   return valid;
  // };

  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <LoginPage />
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
};

export default page;
