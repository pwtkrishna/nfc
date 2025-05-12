import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductDetailsImage from "@/components/Product/ProductDetailsImage";

type Props = {
  params: { slug: string };
};

const Page = async ({ params }: Props) => {
  const product = await getProductBySlug(params.slug);

  if (!product) return notFound();

  return (
    <section>
      <div className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
        <div>
          <div className="flex flex-wrap">
            <ProductDetailsImage product={product} />
            <ProductDetails product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
