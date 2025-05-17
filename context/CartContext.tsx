"use client";

import { Product } from "@/types/product.interface";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedPack?: string;
  selectedType?: string;
  selectedSmartCard?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (i) =>
          i.product.id === item.product.id &&
          i.selectedColor === item.selectedColor &&
          i.selectedPack === item.selectedPack &&
          i.selectedType === item.selectedType &&
          i.selectedSmartCard === item.selectedSmartCard
      );
      if (existingItem) {
        return prev.map((i) =>
          i.product.id === item.product.id &&
          i.selectedColor === item.selectedColor &&
          i.selectedPack === item.selectedPack &&
          i.selectedType === item.selectedType &&
          i.selectedSmartCard === item.selectedSmartCard
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.product.salePrice || item.product.regularPrice;
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
