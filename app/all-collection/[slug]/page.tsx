import CartSidebar from "@/components/cart/CartSidebar";
import Faqs from "@/components/Faqs";
import ProductPageContent from "@/components/Product/ProductPageContent";
import RecentProducts from "@/components/Product/RecentProducts";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <>
      <ProductPageContent slug={slug} />
      <Faqs />
      <RecentProducts />
      <CartSidebar />
    </>
  );
};

export default Page;
