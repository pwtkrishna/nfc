"use client";

import { getAllProducts } from "@/lib/products";
import { Product } from "@/types/product.interface";
import { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const groupedProducts = products.reduce<Record<string, Product[]>>(
    (acc, product) => {
      const section = product.sectionName || "Other";
      if (!acc[section]) acc[section] = [];
      acc[section].push(product);
      return acc;
    },
    {}
  );

  return (
    <div>
      {Object.entries(groupedProducts).map(([sectionName, sectionProducts]) => (
        <div key={sectionName} className="mb-[80px]">
          <div className="pb-[60px]">
            <span className="uppercase text-[18px] font-normal text-[#A1DBEA] leading-[24px] text-left">
              Shop
            </span>
            <h2 className="text-[42px] font-normal leading-[50.4px] text-left text-white my-[6px] max-md:text-[32px] max-md:leading-[40.4px] max-sm:text-[24px] max-sm:leading-[28.8px]">
              {sectionName}
            </h2>
          </div>
          <div className="allCollection-list-wrapp">
            {sectionProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
