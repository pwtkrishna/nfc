import { Product } from "@/types/product.interface";

// const isServer = typeof window === "undefined";
// const vercelUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : null;

const baseUrl = process.env.VERCEL_URL || "http://localhost:3000";

function getApiUrl(path: string) {
  return `${baseUrl}${path}`;
}

// function getApiUrl(path: string) {
//   return `https://nfc-ecru.vercel.app${path}`;
// }

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
  const url = getApiUrl(`/api/products/${encodeURIComponent(slug)}`);
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error("Failed to fetch product by slug");
  }
  const result = await response.json();
  return result && !result.error ? result : null;
};

export const getProductsByRating = async (): Promise<Product[]> => {
  const products = await getAllProducts();
  const avgRating = 3.2;
  return products.filter((product) => product.rating >= avgRating);
};
