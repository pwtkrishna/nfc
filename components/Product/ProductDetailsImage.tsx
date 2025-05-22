"use client";

import { useState, useEffect } from "react";
import ProductDetailMainImage from "./ProductDetailMainImage";
import ProductImageGallery from "./ProductImageGallery";
import { Product } from "@/types/product.interface";

type ProductDetailsImageProps = {
  product: Product;
  selectedColor: string;
};

const ProductDetailsImage = ({
  product,
  selectedColor,
}: ProductDetailsImageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = product.product_galleries.findIndex(
      (img) => img.color?.toLowerCase() === selectedColor.toLowerCase()
    );
    if (index !== -1) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(0);
    }
  }, [selectedColor, product.product_galleries]);

  const activeMedia = product.product_galleries[currentIndex];

  return (
    <div className="">
      <ProductDetailMainImage media={activeMedia} title={product.name} />
      <ProductImageGallery
        product={product}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default ProductDetailsImage;
