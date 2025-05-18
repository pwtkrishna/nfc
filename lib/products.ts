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

export const getProductsByRating = async (): Promise<Product[]> => {
  const avgRating = 3.2;

  const maxRating = productsData.filter(
    (product) => product.rating >= avgRating
  );

  console.log(maxRating);

  return maxRating;
};
