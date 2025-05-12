import { ProductProps } from "@/types/productProps";
import Image from "next/image";

const ProductImageGallery = ({ product }: ProductProps) => {
  return (
    <div className="flex items-center">
      <button className="flex items-center justify-center bg-transparent cursor-pointer w-[44px] h-[44px] text-[#ffffffbf]">
        <span className="inline-flex justify-center w-[20px] h-[20px] text-[#A1DBEA] hover:text-[#04CEFA]">
          <svg
            className="icon icon-caret rotate-90 h-[.4rem] "
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
      </button>
      <ul
        className="flex gap-[10px] overflow-x-scroll p-[0.5rem] shrink grow basis-0 scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {product.imageGallery.map((image, index) => (
          <li key={index} className="product-gallery-image relative">
            <button className="absolute top-0 left-0 block h-full w-full p-0 text-white cursor-pointer bg-transparent">
              <Image
                src={image.src}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
      <button className="flex items-center justify-center bg-transparent cursor-pointer w-[44px] h-[44px] text-[#ffffffbf]">
        <span className="inline-flex justify-center w-[20px] h-[20px] text-[#A1DBEA] hover:text-[#04CEFA]">
          <svg
            className="icon icon-caret -rotate-90 h-[.4rem] "
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
      </button>
    </div>
  );
};

export default ProductImageGallery;
