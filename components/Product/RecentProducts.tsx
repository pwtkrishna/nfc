"use client";

import { productsData } from "@/data/product-data";
import { Product } from "@/types/product.interface";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../AddToCart";
import { getAverageRating } from "@/utils/review-utils";

// Utility to get one random product per section
const getRandomProductsBySection = (products: Product[]): Product[] => {
  const sectionMap = new Map<string, Product[]>();

  // Group products by sectionName
  products.forEach((product) => {
    if (!sectionMap.has(product.sectionName)) {
      sectionMap.set(product.sectionName, []);
    }
    sectionMap.get(product.sectionName)!.push(product);
  });

  // Pick one random product from each section
  const randomProducts: Product[] = [];
  sectionMap.forEach((productList) => {
    const randomIndex = Math.floor(Math.random() * productList.length);
    randomProducts.push(productList[randomIndex]);
  });

  return randomProducts;
};

const RecentProducts = () => {
  const recommendedProducts = getRandomProductsBySection(productsData);

  return (
    <section className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
      <div>
        <h4 className="text-lg font-normal leading-[24px] text-[#A1DBEA] uppercase text-left">
          SHOP MORE
        </h4>
        <h2 className="text-[42px] font-medium leading-[50.4px] text-white my-[6px]">
          You may also like
        </h2>
      </div>

      <div className="recent-product-container flex -mx-[12px] mt-[50px] flex-wrap w-full">
        {recommendedProducts.map((product) => (
          <div
            key={product.id}
            className="recent-product rounded-xl m-[12px] border border-[#A1DBEA26] overflow-hidden"
          >
            <div style={{ aspectRatio: "1 /1" }}>
              <Link href={`/all-collection/${product.slug}`} className="h-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </Link>
            </div>
            <div className="bg-[#2B2E39] py-[18px] px-3">
              <h3 className="product-title">{product.title}</h3>
              <p className="text-sm text-gray-300 mt-1">
                {product.sectionName}
              </p>
              <div className="my-2 font-bold text-[#A1DBEA] flex gap-[4px] items-center">
                {product.salePrice && (
                  <span className="text-xl font-semibold leading-[36.98px] text-white">
                    Rs. {product.salePrice}
                  </span>
                )}

                {product.regularPrice && (
                  <span className="text-[#b0adad] text-lg font-semibold leading-[36.98px] text-left">
                    Rs.
                    {product.regularPrice}
                  </span>
                )}
              </div>
              {product.rating && (
                <div className="flex items-center">
                  <div className="flex items-center gap-[4px] rounded-xl border border-[#4E515C] py-[1px] px-[6px] mb-[8px]">
                    <span className="text-[#04CEFA] text-[15.6px] font-bold leading-7 text-left">
                      {getAverageRating(product.reviews)}
                    </span>
                    <span className="text-[#04CEFA]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M6.86471 1.7547L7.74471 3.5147C7.86471 3.7597 8.18471 3.9947 8.45471 4.0397L10.0497 4.3047C11.0697 4.4747 11.3097 5.2147 10.5747 5.9447L9.33471 7.1847C9.12471 7.3947 9.00971 7.7997 9.07471 8.0897L9.42971 9.6247C9.70971 10.8397 9.06471 11.3097 7.98971 10.6747L6.49471 9.7897C6.22471 9.6297 5.77971 9.6297 5.50471 9.7897L4.00971 10.6747C2.93971 11.3097 2.28971 10.8347 2.56971 9.6247L2.92471 8.0897C2.98971 7.7997 2.87471 7.3947 2.66471 7.1847L1.42471 5.9447C0.69471 5.2147 0.929711 4.4747 1.94971 4.3047L3.54471 4.0397C3.80971 3.9947 4.12971 3.7597 4.24971 3.5147L5.12971 1.7547C5.60971 0.799702 6.38971 0.799702 6.86471 1.7547Z"
                          fill="#04CEFA"
                          stroke="#04CEFA"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              )}
              <AddToCart className="mt-3 mb-0" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProducts;
