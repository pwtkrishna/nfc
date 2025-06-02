"use client";

import useSWR from "swr";
import ProductListItem from "./ProductListItem";
import ProductListSkeleton from "./skeleton/ProductListSkeleton";
import { Product } from "@/types/product.interface";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductList = () => {
  // Use SWR to fetch products from your API route
  const { data, error, isLoading } = useSWR("/api/products", fetcher, {
    refreshInterval: 10000,
  });

  // Your API returns { data: [...] }
  const products: Product[] = data?.data ?? [];

  const groupedProducts = products.reduce<Record<string, Product[]>>(
    (acc, product) => {
      // Filter only active categories
      const activeCategories = Array.isArray(product.nfc_product_categories)
        ? product.nfc_product_categories.filter(
            (cat) => cat.is_active === "Yes"
          )
        : [];

      // If no active categories, skip this product
      if (activeCategories.length === 0) return acc;

      // Group by each active category
      activeCategories.forEach((category) => {
        const name = category?.name?.trim() || "Other";
        if (!acc[name]) acc[name] = [];
        acc[name].push(product);
      });

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

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  if (error) {
    return (
      <div className="flex justify-center py-10">
        <span className="text-white text-lg">Failed to load products.</span>
      </div>
    );
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
