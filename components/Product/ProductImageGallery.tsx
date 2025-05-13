"use client";

import { ProductProps } from "@/types/productProps";
import ProductImageGalleryItem from "./ProductImageGalleryItem";
import Button from "../Button";
import { Dispatch, SetStateAction, useRef, useEffect } from "react";

type GalleryProps = ProductProps & {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

const ProductImageGallery = ({
  product,
  currentIndex,
  setCurrentIndex,
}: GalleryProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Scroll to the current thumbnail when it changes
  useEffect(() => {
    const currentItem = itemRefs.current[currentIndex];
    if (currentItem) {
      currentItem.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  const goToPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex < product.imageGallery.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <Button
        className={`flex items-center justify-center bg-transparent w-[44px] h-[44px] text-[#ffffffbf] ${
          currentIndex === 0
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
        onClick={goToPrev}
        disabled={currentIndex === 0}
        variant="none"
      >
        <span className="inline-flex justify-center w-[10px] h-[10px] text-[#A1DBEA] hover:text-[#04CEFA]">
          <svg
            className="icon icon-caret rotate-90 h-full w-full"
            viewBox="0 0 10 6"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </Button>

      <div className="relative overflow-hidden flex-1">
        <ul
          ref={listRef}
          className="flex gap-[10px] transition-transform duration-300 ease-in-out overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {product.imageGallery.map((image, index) => (
            <ProductImageGalleryItem
              key={index}
              image={image}
              title={product.title}
              onClick={() => setCurrentIndex(index)}
              isActive={index === currentIndex}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            />
          ))}
        </ul>
      </div>

      <Button
        className={`flex items-center justify-center bg-transparent w-[44px] h-[44px] text-[#ffffffbf] ${
          currentIndex === product.imageGallery.length - 1
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
        onClick={goToNext}
        disabled={currentIndex === product.imageGallery.length - 1}
        variant="none"
      >
        <span className="inline-flex justify-center w-[10px] h-[10px] text-[#A1DBEA] hover:text-[#04CEFA]">
          <svg
            className="icon icon-caret -rotate-90 h-full w-full"
            viewBox="0 0 10 6"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </Button>
    </div>
  );
};

export default ProductImageGallery;
