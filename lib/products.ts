import { Product } from "@/types/product.interface";

const isServer = typeof window === "undefined";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

// Helper to get the correct URL
function getApiUrl(path: string) {
  return isServer ? `${baseUrl}${path}` : path;
}

export const getAllProducts = async (): Promise<Product[]> => {
  const url = getApiUrl("/api/products");
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Failed to fetch products");
  const result = await response.json();
  return Array.isArray(result.data) ? result.data : [];
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  const url = `/api/products?slug=${encodeURIComponent(slug)}`;
  const response = await fetch(url, {
    method: "GET",
    credentials: "include", // ensures cookies are sent
  });
  if (!response.ok) throw new Error("Failed to fetch product by slug");
  const result = await response.json();
  return Array.isArray(result.data) && result.data.length > 0
    ? result.data[0]
    : null;
};

export const getProductsByRating = async (): Promise<Product[]> => {
  const products = await getAllProducts();
  const avgRating = 3.2;
  return products.filter((product) => product.rating >= avgRating);
};
