"use client";

import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductDetailsImage from "./ProductDetailsImage";
import TrustedCarousel from "../TrustedCarousel";
import Faqs from "../Faqs";
import Testimonials from "../Testimonials";
import RecentProducts from "./RecentProducts";
import CartSidebar from "../cart/CartSidebar";
import { Product } from "@/types/product.interface";
import { getProductBySlug } from "@/lib/products";

type ProductPageContentProps = {
  slug: string;
};

const ProductPageContent = ({ slug }: ProductPageContentProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const prod = await getProductBySlug(slug);
        if (!prod) {
          setError("Product not found.");
        } else {
          setProduct(prod);
          setSelectedColor(prod.colors?.[0] || "");
        }
      } catch {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;
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
      <Faqs />
      <RecentProducts />
      <CartSidebar />
    </>
  );
};

export default ProductPageContent;
