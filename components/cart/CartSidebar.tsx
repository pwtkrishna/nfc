// @/components/CartSidebar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Button from "../Button";

const CartSidebar = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
    getCartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed z-[9999] top-0 left-0 w-screen h-full flex justify-end bg-[#ffffff80]">
      <div
        className="h-full w-[520px] mb-8 m-4 overflow-scroll px-4 border border-[#fff3] flex flex-col rounded-t-[12px] rounded-l-[12px] bg-[#1f2128]"
        style={{ maxWidth: "calc(100vw - 3rem)" }}
      >
        <div className="flex items-center justify-between py-4">
          <h3 className="mb-2.5 text-[24px] font-semibold text-white">
            Your Cart
          </h3>
          <button
            className="inline-block min-w-[44px] min-h-[44px] border-0 cursor-pointer"
            onClick={() => setIsCartOpen(false)}
          >
            <span className="h-[20px] w-[20px] inline-flex justify-center items-center text-[#A1DBEA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="icon icon-close w-full h-full"
                viewBox="0 0 18 17"
              >
                <path
                  fill="currentColor"
                  d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="flex-1">
          {cart.length === 0 ? (
            <p className="text-white text-center">Your cart is empty</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor || ""}-${
                    item.selectedPack || ""
                  }-${item.selectedType || ""}-${item.selectedSmartCard || ""}`}
                  className="flex items-center gap-4 p-4 bg-[#2B2E39] rounded-[12px]"
                >
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-white text-[16px] font-medium">
                      {item.product.title}
                    </h4>
                    <p className="text-[#d9d9d9] text-[14px]">
                      {item.selectedColor && `Color: ${item.selectedColor}`}
                      {item.selectedPack && `, Pack: ${item.selectedPack}`}
                      {item.selectedType && `, Type: ${item.selectedType}`}
                      {item.selectedSmartCard &&
                        `, Smart Card: ${item.selectedSmartCard}`}
                    </p>
                    <p className="text-white text-[14px]">
                      $
                      {(
                        item.product.salePrice || item.product.regularPrice
                      ).toFixed(2)}
                      x {item.quantity} = $
                      {(
                        (item.product.salePrice || item.product.regularPrice) *
                        item.quantity
                      ).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="w-6 h-6 bg-[#3B3E49] text-white rounded flex items-center justify-center"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="text-white">{item.quantity}</span>
                      <button
                        className="w-6 h-6 bg-[#3B3E49] text-white rounded flex items-center justify-center"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-[#A1DBEA]"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="py-4 border-t border-[#fff3]">
            <div className="flex justify-between text-white text-[18px] font-semibold">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <Button
                className="uppercase text-white w-full mt-4"
                variant="solid"
                style={{
                  minHeight: "calc(45px + 1px * 2)",
                }}
              >
                Buy Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
