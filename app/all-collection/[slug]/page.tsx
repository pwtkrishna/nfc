import ProductPageContent from "@/components/Product/ProductPageContent";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

// No need for a separate PageProps type anymore
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log("Requested slug:", slug);
  const product = await getProductBySlug(slug);
  console.log(slug);

  console.log(product);

  if (!product) return notFound();

  return <ProductPageContent slug={slug} />;
};

export default Page;
