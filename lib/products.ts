import { productsData } from "@/data/product-data";
import { Product } from "@/types/product.interface";

export const getAllProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(productsData), 300));
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return (
    productsData.find((product) => {
      return product.slug === slug;
    }) || null
  );
};
