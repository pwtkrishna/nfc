"use client";

import { useState } from "react";
import { ProductProps } from "@/types/productProps";
import ProductDetailMainImage from "./ProductDetailMainImage";
import ProductImageGallery from "./ProductImageGallery";

type ProductDetailsImageProps = ProductProps & {
  selectedColor: string;
};

const ProductDetailsImage = ({ product, selectedColor }: ProductDetailsImageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeMedia = product.imageGallery[currentIndex];

  const displayedImage = product.imageGallery.find(
    img => img.color?.toLowerCase() === selectedColor.toLowerCase()
  ) || product.imageGallery[0];



  return (
    <div className="product-image-wrapper">
      <div className="block lg:sticky lg:top-[3rem]">
        <ProductDetailMainImage media={displayedImage} title={product.title} />
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
