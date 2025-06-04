import { useMemo, useState, useEffect } from "react";
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
  // Compose galleries, injecting card_image as the first gallery image
  const galleries = useMemo(() => {
    const hasCardImage = !!product.card_image;
    const cardImageGallery = hasCardImage
      ? [
          {
            id: -1, // Use -1 or another unique value
            image: product.card_image,
            type: "image" as const,
            color: undefined,
          },
        ]
      : [];
    // product.product_galleries might be undefined, so default to []
    return [...cardImageGallery, ...(product.product_galleries || [])];
  }, [product.card_image, product.product_galleries]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = galleries.findIndex(
      (img) =>
        img.color &&
        selectedColor &&
        img.color.toLowerCase() === selectedColor.toLowerCase()
    );
    if (index !== -1) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(0);
    }
  }, [selectedColor, galleries]);

  const activeMedia = galleries[currentIndex];

  return (
    <div>
      <ProductDetailMainImage media={activeMedia} title={product.name} />
      {galleries.length > 1 && (
        <ProductImageGallery
          product={{ ...product, product_galleries: galleries }}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
};

export default ProductDetailsImage;
