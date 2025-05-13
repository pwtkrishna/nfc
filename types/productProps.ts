import { Product } from "./product.interface";

export type ProductProps = {
  product: Product;
};

export type ProductImageGalleryType = {
  type: "image" | "video";
  src: string;
};

export type ColorProps = {
  colors: Product["colors"];
};

export interface ProductImageGalleryProps {
  image: ProductImageGalleryType;
  title: string;
  onClick?: () => void;
  isActive?: boolean;
}
