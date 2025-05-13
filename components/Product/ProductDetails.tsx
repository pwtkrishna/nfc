import Image from "next/image";
import ReviewStar from "../ReviewStar";
import ProductPrice from "./ProductPrice";
import ProductTags from "./ProductTags";
import { getAverageRating } from "@/utils/review-utils";
import { ProductProps } from "@/types/productProps";
import ColorSelector from "./ColorSelector";

const ProductDetails = ({ product }: ProductProps) => {
  return (
    <div className="product-info-wrapper pl-[3rem]">
      <h2 className="text-white text-[42px] font-semibold leading-[50.4px] text-left mb-[1.1rem]">
        {product.title}
      </h2>
      <div className="flex items-center gap-[8px] mt-[16px] mb-[10px]">
        <ReviewStar rating={getAverageRating(product.reviews)} />
        <p className="text-[14px] font-medium leading-[20px] text-left text-[#d9d9d9]">
          Based on 11,000+ reviews from
        </p>
        <div className="flex items-center gap-[8px]">
          <Image
            src="/reviews/google.png"
            alt="Google reviews"
            height={17}
            width={40}
          />
          <Image
            src="/reviews/app-store.png"
            alt="App Store"
            height={17}
            width={16}
          />
        </div>
      </div>
      <ProductPrice product={product} />
      <p className="text-white text-[18px] font-normal tracking-wide">
        <strong>{product.description}</strong>
      </p>
      <ProductTags tags={product.tags} />
      <ColorSelector colors={product.colors} />
    </div>
  );
};

export default ProductDetails;
