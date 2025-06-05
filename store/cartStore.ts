import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getApplicableDiscount } from "@/utils/getCoupons";
import { Product } from "@/types/product.interface";
import toast from "react-hot-toast";
import { nanoid } from "nanoid";

export type Variant = {
  selectedColor?: string;
  selectedPack?: string;
  selectedType?: string;
  selectedSmartCard?: string;
};

export type CartItem = {
  cartItemId: string;
  productId: number;
  quantity: number;
  variant: Variant;
  product: Product;
};

type DiscountedItem = {
  productId: number;
  variant: Variant;
  quantity: number;
  basePrice: number;
  discountPercent: number;
  discountedUnitPrice: number;
  totalPrice: number;
};

type CartState = {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  updateQuantity: (
    productId: number,
    variant: Variant,
    quantity: number
  ) => void;

  clearCart: () => void;
  getCartTotal: () => number;
  getProductDiscountedPrice: () => DiscountedItem[];
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      isCartOpen: false,

      setIsCartOpen: (open) => set({ isCartOpen: open }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),

      addToCart: (item) => {
        const cart = get().cart;
        const existingIndex = cart.findIndex(
          (i) =>
            i.productId === item.productId &&
            JSON.stringify(i.variant) === JSON.stringify(item.variant)
        );

        const maxQty = item.product.quantity ?? Infinity;
        const existingQty =
          existingIndex !== -1 ? cart[existingIndex].quantity : 0;
        const newQty = existingQty + item.quantity;

        if (newQty > maxQty) {
          toast.error(`Only ${maxQty} items available in stock.`);
          return;
        }

        if (existingIndex !== -1) {
          // Update quantity, keep same cartItemId
          const updatedCart = [...cart];
          updatedCart[existingIndex].quantity = newQty;
          set({ cart: updatedCart });
        } else {
          // Always assign a new, unique cartItemId
          set({ cart: [...cart, { ...item, cartItemId: nanoid() }] });
        }

        get().openCart();
        toast.success("Item added to cart!");
      },

      removeFromCart: (item) => {
        set({
          cart: get().cart.filter(
            (i) =>
              !(
                i.productId === item.productId &&
                JSON.stringify(i.variant) === JSON.stringify(item.variant)
              )
          ),
        });
      },

      updateQuantity: (productId, variant, quantity) => {
        if (quantity < 1) {
          set((state) => ({
            cart: state.cart.filter(
              (item) =>
                !(
                  item.productId === productId &&
                  JSON.stringify(item.variant) === JSON.stringify(variant)
                )
            ),
          }));
        } else {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.productId === productId &&
              JSON.stringify(item.variant) === JSON.stringify(variant)
                ? { ...item, quantity }
                : item
            ),
          }));
        }
      },

      clearCart: () => set({ cart: [] }),

      getCartTotal: () => {
        return get().cart.reduce((total, item) => {
          const basePrice =
            item.product.sale_price ?? item.product.regular_price;
          const discount = getApplicableDiscount(item.product, item.quantity);
          const discountedPrice = basePrice * (1 - discount / 100);
          return total + discountedPrice * item.quantity;
        }, 0);
      },

      getProductDiscountedPrice: () => {
        return get().cart.map((item) => {
          const basePrice =
            item.product.sale_price ?? item.product.regular_price;
          const discount = getApplicableDiscount(item.product, item.quantity);
          const discountedPrice = basePrice * (1 - discount / 100);

          return {
            productId: item.productId,
            variant: item.variant,
            quantity: item.quantity,
            basePrice,
            discountPercent: discount,
            discountedUnitPrice: discountedPrice,
            totalPrice: discountedPrice * item.quantity,
          };
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
