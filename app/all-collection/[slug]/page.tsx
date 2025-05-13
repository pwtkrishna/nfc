import ProductPageContent from "@/components/Product/ProductPageContent";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";


type Props = {
  params: { slug: string; };
};

const Page = async ({ params }: Props) => {
  const product = await getProductBySlug(params.slug);

  if (!product) return notFound();

  return (
    <ProductPageContent product={product} />
  );
};

export default Page;
