"use client";

import { getAllProducts } from "@/lib/products";
import { Product } from "@/types/product.interface";
import { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import ProductListSkeleton from "./skeleton/ProductListSkeleton";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  // Group products by category
  const groupedProducts = products.reduce<Record<string, Product[]>>(
    (acc, product) => {
      const categories = Array.isArray(product.nfc_product_categories)
        ? product.nfc_product_categories
        : [];

      if (categories.length > 0) {
        categories.forEach((category) => {
          const name = category?.name?.trim() || "Other";
          if (!acc[name]) acc[name] = [];
          acc[name].push(product);
        });
      } else {
        if (!acc["Other"]) acc["Other"] = [];
        acc["Other"].push(product);
      }
      return acc;
    },
    {}
  );

  // Helper to generate section IDs
  const getSectionId = (sectionName: string) =>
    sectionName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  if (loading) {
    return <ProductListSkeleton />;
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center py-10">
        <span className="text-white text-lg">No products found.</span>
      </div>
    );
  }

  // Get all section names except "Other"
  const otherSections = Object.keys(groupedProducts).filter(
    (name) => name !== "Other"
  );

  // Sort other sections as you wish (alphabetically here)
  otherSections.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  // Final array: all other sections, then "Other" (if exists)
  const orderedSections = [
    ...otherSections,
    ...(groupedProducts["Other"] ? ["Other"] : []),
  ];

  // DEBUG: Log the order to ensure correctness
  // console.log("Ordered Sections:", orderedSections);

  return (
    <div>
      {orderedSections.map((sectionName) => (
        <div
          key={sectionName}
          id={getSectionId(sectionName)}
          className="mb-[80px]"
        >
          <div className="pb-[60px]">
            <span className="uppercase text-[18px] font-normal text-[#A1DBEA] leading-[24px] text-left">
              Shop
            </span>
            <h2 className="text-[42px] font-normal leading-[50.4px] text-left text-white my-[6px] max-md:text-[32px] max-md:leading-[40.4px] max-sm:text-[24px] max-sm:leading-[28.8px]">
              {sectionName}
            </h2>
          </div>
          <div className="allCollection-list-wrapp">
            {groupedProducts[sectionName].map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
