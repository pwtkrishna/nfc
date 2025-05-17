// @/lib/products.ts
import { productsData } from "@/data/product-data";
import { Product } from "@/types/product.interface";

type Review = Product["reviews"][number];

export const getAverageRating = (reviews: Review[]): number => {
  if (!reviews || reviews.length === 0) return 0;
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return parseFloat((total / reviews.length).toFixed(1));
};

export const getProductsByAverageReviewRating = (
  minRating: number = 3.2
): Product[] => {
  return productsData
    .filter((product) => getAverageRating(product.reviews) >= minRating)
    .sort((a, b) => getAverageRating(b.reviews) - getAverageRating(a.reviews));
};
