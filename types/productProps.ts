import { Dispatch, SetStateAction } from "react";
import { Product } from "./product.interface";

export type ProductProps = {
  product: Product;
  selectedColor: string;
  onColorSelect: Dispatch<SetStateAction<string>>;
};

export type ProductImageGalleryType = {
  type: "image" | "video";
  src: string;
};

export type ColorProps = {
  colors: Product["colors"];
};

export type CardVariantProps = {
  packs: Product["packs"];
  type: Product["type"];
  smartCard: Product["smartCards"];
};

export interface ProductImageGalleryProps {
  image: ProductImageGalleryType;
  title: string;
  onClick?: () => void;
  isActive?: boolean;
}

export type CoupounProps = {
  coupoun: Product["coupoun"];
};

export type ReviewsProps = {
  reviews: Product["reviews"];
};
