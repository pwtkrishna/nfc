import CartSidebar from "@/components/cart/CartSidebar";
import Faqs from "@/components/Faqs";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ProductPageContent from "@/components/Product/ProductPageContent";
import RecentProducts from "@/components/Product/RecentProducts";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";
import { Toaster } from "react-hot-toast";

interface Props {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <ProductPageContent slug={slug} />
      <Faqs />
      <RecentProducts />
      {/* <CartSidebar /> */}
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
};

export default Page;
