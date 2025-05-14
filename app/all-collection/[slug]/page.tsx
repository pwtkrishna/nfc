import ProductPageContent from "@/components/Product/ProductPageContent";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const product = await getProductBySlug(params.slug);

  if (!product) return notFound();

  return <ProductPageContent product={product} />;
};

export default Page;
