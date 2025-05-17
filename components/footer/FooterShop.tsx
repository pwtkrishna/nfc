"use client";

import { getProductsByAverageReviewRating } from "@/utils/review-utils";
import Link from "next/link";

const FooterShop = () => {
  const ratedProducts = getProductsByAverageReviewRating(3.2).slice(0, 6);

  return (
    <div className="pl-[70px] max-w-[250px] max-[666px]:pl-0 max-[800px]:w-[250px] max-[542px]:w-[50%] max-[466px]:w-full">
      <h2 className="text-[24px] font-semibold leading-[30px] text-white mb-[14px]">
        Shop
      </h2>
      <ul className="flex flex-col">
        {/* Dynamic Product Links */}
        {ratedProducts.map((product) => (
          <li key={product.id}>
            <Link
              href={`/products/${product.slug}`} // Adjust URL structure as needed
              className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
            >
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterShop;
