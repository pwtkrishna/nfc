"use client";

import { useState, useEffect } from "react";
import { ProductProps } from "@/types/productProps";
import ProductDetailMainImage from "./ProductDetailMainImage";
import ProductImageGallery from "./ProductImageGallery";

type ProductDetailsImageProps = ProductProps & {
  selectedColor: string;
};

const ProductDetailsImage = ({
  product,
  selectedColor,
}: ProductDetailsImageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = product.imageGallery.findIndex(
      (img) => img.color?.toLowerCase() === selectedColor.toLowerCase()
    );
    if (index !== -1) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(0);
    }
  }, [selectedColor, product.imageGallery]);

  const activeMedia = product.imageGallery[currentIndex];

  return (
    <div className="">
      <ProductDetailMainImage media={activeMedia} title={product.title} />
      <ProductImageGallery
        product={product}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default ProductDetailsImage;
