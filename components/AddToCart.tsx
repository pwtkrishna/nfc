"use client";

import Button from "./Button";
import { useCartStore } from "@/store/cartStore";
import { useProductStore } from "@/store/productStore";
import { Product } from "@/types/product.interface";

interface AddToCartProps {
  product: Product;
  quantity: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ product, quantity }) => {
  const { addToCart, openCart } = useCartStore();
  const { selectedVariant } = useProductStore();

  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      product,
      variant: selectedVariant,
      quantity,
    };

    addToCart(cartItem);
    openCart();
  };

  return (
    <Button
      className="uppercase text-white"
      variant="solid"
      style={{
        minHeight: "calc(45px + 1px * 2)",
        minWidth: "calc(120px + 1px * 2)",
      }}
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
