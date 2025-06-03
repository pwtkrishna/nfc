import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ProductList from "@/components/Product/ProductList";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <section>
        <div>
          <Image
            src="/product_banner.webp"
            alt="Product banner"
            height={500}
            width={500}
            className="w-full"
          />
        </div>
        <div className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
          <ProductList />
        </div>
      </section>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
};

export default page;
