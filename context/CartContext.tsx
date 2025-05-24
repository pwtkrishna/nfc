// "use client";

// import { Product } from "@/types/product.interface";
// import { getApplicableDiscount } from "@/utils/getCoupons";
// import { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   product: Product;
//   quantity: number;
//   selectedColor?: string;
//   selectedPack?: string;
//   selectedType?: string;
//   selectedSmartCard?: string;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (item: CartItem) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
//   clearCart: () => void;
//   isCartOpen: boolean;
//   setIsCartOpen: (open: boolean) => void;
//   getCartTotal: () => number;
//   openCart: () => void;
//   closeCart: () => void;
//   getProductDiscountedPrice: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const openCart = () => setIsCartOpen(true);
//   const closeCart = () => setIsCartOpen(false);

//   const addToCart = (item: CartItem) => {
//     setCart((prev) => {
//       const existingItem = prev.find(
//         (i) =>
//           i.product.id === item.product.id &&
//           i.selectedColor === item.selectedColor &&
//           i.selectedPack === item.selectedPack &&
//           i.selectedType === item.selectedType &&
//           i.selectedSmartCard === item.selectedSmartCard
//       );
//       if (existingItem) {
//         return prev.map((i) =>
//           i.product.id === item.product.id &&
//           i.selectedColor === item.selectedColor &&
//           i.selectedPack === item.selectedPack &&
//           i.selectedType === item.selectedType &&
//           i.selectedSmartCard === item.selectedSmartCard
//             ? { ...i, quantity: i.quantity + item.quantity }
//             : i
//         );
//       }
//       return [...prev, item];
//     });
//     openCart();
//     setIsCartOpen(true);
//   };

//   const removeFromCart = (item: CartItem) => {
//     setCart((prev) =>
//       prev.filter(
//         (i) =>
//           !(
//             i.product.id === item.product.id &&
//             i.selectedColor === item.selectedColor &&
//             i.selectedPack === item.selectedPack &&
//             i.selectedType === item.selectedType &&
//             i.selectedSmartCard === item.selectedSmartCard
//           )
//       )
//     );
//   };

//   const updateQuantity = (productId: number, quantity: number) => {
//     setCart((prev) => {
//       return prev.reduce<CartItem[]>((acc, item) => {
//         if (item.product.id === productId) {
//           if (quantity <= 0) {
//             return acc;
//           }
//           acc.push({ ...item, quantity });
//         } else {
//           acc.push(item);
//         }
//         return acc;
//       }, []);
//     });
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const getProductDiscountedPrice = () => {
//     return cart.map((item) => {
//       const basePrice = item.product.sale_price ?? item.product.regular_price;
//       const discount = getApplicableDiscount(item.product, item.quantity);
//       const discountedPrice = basePrice * (1 - discount / 100);
//       return {
//         productId: item.product.id,
//         variant: {
//           selectedColor: item.selectedColor,
//           selectedPack: item.selectedPack,
//           selectedType: item.selectedType,
//           selectedSmartCard: item.selectedSmartCard,
//         },
//         quantity: item.quantity,
//         basePrice,
//         discountPercent: discount,
//         discountedUnitPrice: discountedPrice,
//         totalPrice: discountedPrice * item.quantity,
//       };
//     });
//   };

//   const getCartTotal = () => {
//     return cart.reduce((total, item) => {
//       const price = item.product.sale_price || item.product.regular_price;
//       const discount = getApplicableDiscount(item.product, item.quantity);
//       const discountedPrice = price * (1 - discount / 100);
//       return total + discountedPrice * item.quantity;
//     }, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         isCartOpen,
//         setIsCartOpen,
//         openCart,
//         closeCart,
//         getCartTotal,
//         getProductDiscountedPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
