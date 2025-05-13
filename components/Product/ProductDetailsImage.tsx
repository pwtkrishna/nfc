"use client";

import { useState } from "react";
import { ProductProps } from "@/types/productProps";
import ProductDetailMainImage from "./ProductDetailMainImage";
import ProductImageGallery from "./ProductImageGallery";

const ProductDetailsImage = ({ product }: ProductProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeMedia = product.imageGallery[currentIndex];

  return (
    <div className="product-image-wrapper">
      <div className="block sticky top-[3rem]">
        <ProductDetailMainImage media={activeMedia} title={product.title} />
        <ProductImageGallery
          product={product}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default ProductDetailsImage;
