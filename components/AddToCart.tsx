"use client";

import Button from "./Button";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product.interface";

interface AddToCartProps {
  product: Product;
  selectedColor?: string;
  selectedPack?: string;
  selectedType?: string;
  selectedSmartCard?: string;
  quantity: number;
}

const AddToCart: React.FC<AddToCartProps> = ({
  product,
  selectedColor,
  selectedPack,
  selectedType,
  selectedSmartCard,
  quantity,
}) => {
  const { addToCart, openCart } = useCartStore();

  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      product: product,
      variant: {
        selectedColor,
        selectedPack,
        selectedType,
        selectedSmartCard,
      },
      quantity,
    };

    addToCart(cartItem);
    openCart();
  };

  return (
    <Button
      className="uppercase text-white w-3"
      variant="solid"
      style={{
        minHeight: "calc(45px + 1px * 2)",
        // maxWidth: "calc(120px + 1px * 2)",
      }}
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
