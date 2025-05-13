import { ProductImageGalleryProps } from "@/types/productProps";
import Image from "next/image";
import { forwardRef } from "react";

const ProductImageGalleryItem = forwardRef<
  HTMLLIElement,
  ProductImageGalleryProps
>(({ image, title, onClick, isActive }, ref) => {
  return (
    <li
      ref={ref}
      className={`product-gallery-image relative rounded overflow-hidden border transition-all duration-300
        ${isActive ? "border-[#04CEFA]" : "border-transparent"} shrink-0`}
    >
      <button
        onClick={onClick}
        className="absolute top-0 left-0 block h-full w-full p-0 text-white cursor-pointer bg-transparent"
      >
        {image.type === "image" ? (
          <Image
            src={image.src}
            alt={title}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={image.src}
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </button>
    </li>
  );
});

ProductImageGalleryItem.displayName = "ProductImageGalleryItem";

export default ProductImageGalleryItem;
