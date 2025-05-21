import { create } from "zustand";
import { Product } from "@/types/product.interface";

type Variant = {
  selectedColor?: string;
  selectedPack?: string;
  selectedType?: string;
  selectedSmartCard?: string;
};

type ProductState = {
  currentProduct: Product | null;
  setCurrentProduct: (product: Product) => void;

  selectedVariant: Variant;
  setSelectedVariant: (variant: Variant) => void;

  maxQuantity: number | undefined;
  setMaxQuantity: (qty: number) => void;
};

export const useProductStore = create<ProductState>((set) => ({
  currentProduct: null,
  setCurrentProduct: (product) => set({ currentProduct: product }),

  selectedVariant: {},
  setSelectedVariant: (variant) => set({ selectedVariant: variant }),

  maxQuantity: undefined,
  setMaxQuantity: (qty) => set({ maxQuantity: qty }),
}));
