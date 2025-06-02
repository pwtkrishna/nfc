"use client";

import useSWR from "swr";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductDetailsImage from "./ProductDetailsImage";
import TrustedCarousel from "../TrustedCarousel";
import Testimonials from "../Testimonials";
import { Product } from "@/types/product.interface";
import ProductDetailsImageSkeleton from "./skeleton/ProductDetailsImageSkeleton ";
import ProductDetailsSkeleton from "./skeleton/ProductDetailsSkeleton ";

type ProductPageContentProps = {
  slug: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductPageContent = ({ slug }: ProductPageContentProps) => {
  const { data, error, isLoading } = useSWR(`/api/products/${slug}`, fetcher, {
    refreshInterval: 10000,
  });

  // Always define hooks at the top!
  // Use fallback values if data is not ready yet
  const product: Product | undefined = data?.data ?? data;
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    if (product?.colors?.[0]) {
      setSelectedColor(product.colors[0]);
    }
  }, [product?.colors]);

  // Now do your conditional rendering
  if (isLoading)
    return (
      <div className="flex max-[729px]:flex-col">
        <ProductDetailsImageSkeleton />
        <ProductDetailsSkeleton />
      </div>
    );

  if (error || data?.error)
    return (
      <div className="text-center text-red-500 py-10">
        {data?.error || "Failed to load product."}
      </div>
    );

  if (!product)
    return <div className="text-center py-10">No product found.</div>;
  return (
    <>
      <section>
        <div className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
          <div className="flex max-[729px]:flex-col">
            <div className="flex flex-col product-image-wrapper">
              <div className="block lg:sticky lg:top-[3rem]">
                <ProductDetailsImage
                  product={product}
                  selectedColor={selectedColor}
                />
              </div>
            </div>
            <ProductDetails
              product={product}
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
            />
          </div>
        </div>
      </section>
      <TrustedCarousel />
      <Testimonials reviews={product.reviews || []} />
    </>
  );
};

export default ProductPageContent;
