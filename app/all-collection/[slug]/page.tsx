import ProductPageContent from "@/components/Product/ProductPageContent";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

// No need for a separate PageProps type anymore
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  return <ProductPageContent product={product} />;
};

export default Page;
