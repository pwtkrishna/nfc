"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { getApplicableDiscount } from "@/utils/getCoupons";
import { formatPrice } from "@/utils/format-price";
import { useCartStore } from "@/store/cartStore";
import type { CartItem } from "@/store/cartStore";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Quantity from "../Quantity";

type Variant = CartItem["variant"];

const variantKeys = ["Color", "Pack", "Type", "SmartCard"] as const;

// type DiscountedItem = {
//   productId: string;
//   variant: {
//     selectedColor: string;
//     selectedPack: string;
//     selectedType: string;
//     selectedSmartCard: string;
//   };
//   quantity: number;
//   basePrice: number;
//   discountPercent: number;
//   discountedUnitPrice: number;
//   totalPrice: number;
// };

const CartSidebar = () => {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
    getCartTotal,
    closeCart,
    getProductDiscountedPrice,
  } = useCartStore();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("no-scrollbar");
      document.querySelector(".cartsidebar-container")?.classList.add("mr-0");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("no-scrollbar");
      document
        .querySelector(".cartsidebar-container")
        ?.classList.remove("mr-0");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("no-scrollbar");
      document
        .querySelector(".cartsidebar-container")
        ?.classList.remove("mr-0");
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;
  const discountedPrices = getProductDiscountedPrice();

  return (
    <div className="fixed z-[999] top-0 left-0 w-screen h-full flex justify-end bg-[#ffffff80]">
      <div
        className="cartsidebar-container h-full w-[520px] mb-8 m-4 overflow-scroll px-4 border border-[#fff3] flex flex-col rounded-t-[12px] rounded-l-[12px] bg-[#1f2128]"
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
          <div className="flex justify-between items-center mb-[5px] border-b border-b-[#00d9ff]">
            <div className="text-[10px] tracking-wider uppercase pb-[18px] font-normal text-left text-[#ffffffbf]">
              Product
            </div>
            <div className="text-[10px] tracking-wider uppercase pb-[18px] font-normal text-left text-[#ffffffbf]">
              Total
            </div>
          </div>
          {cart.length === 0 ? (
            <p className="text-white text-center">Your cart is empty</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => {
                const discountedItem = discountedPrices.find(
                  (price) =>
                    price.productId === item.product.id &&
                    JSON.stringify(price.variant) ===
                      JSON.stringify({
                        selectedColor: item.variant.selectedColor || "",
                        selectedPack: item.variant.selectedPack || "",
                        selectedType: item.variant.selectedType || "",
                        selectedSmartCard: item.variant.selectedSmartCard || "",
                      })
                );
                return (
                  <div
                    key={`${item.product.id}-${
                      item.variant.selectedColor || ""
                    }-${item.variant.selectedPack || ""}-${
                      item.variant.selectedType || ""
                    }-${item.variant.selectedSmartCard || ""}`}
                    className="flex justify-between gap-4 py-4 max-sm:gap-0"
                  >
                    <div className="w-[100px]">
                      <Image
                        src={item.product.card_image || "/avatar.webp"}
                        alt={item.product.name}
                        width={100}
                        height={50}
                        className="w-full h-auto text-white"
                      />
                    </div>
                    <div className="max-[375px]:max-w-[120px] max-[375px]:pl-2">
                      <Link href={item.product.slug}>
                        <h4
                          className="text-white text-[15px] font-normal hover:underline decoration-2 underline-offset-2"
                          style={{ wordBreak: "break-word" }}
                        >
                          {item.product.name}
                        </h4>
                      </Link>

                      {variantKeys.map((key) => {
                        const variantKey = `selected${key}` as keyof Variant;
                        const value = item.variant[variantKey];

                        return (
                          value && (
                            <p key={key} className="text-[#d9d9d9] text-[14px]">
                              {key}: {value}
                            </p>
                          )
                        );
                      })}

                      {/* <p className="text-[#d9d9d9] text-[14px]">
                      {item.variant.selectedColor &&
                        `Color: ${item.variant.selectedColor}`}
                    </p>
                    <p className="text-[#d9d9d9] text-[14px]">
                      {item.variant.selectedPack &&
                        `Pack: ${item.variant.selectedPack}`}
                    </p>
                    <p className="text-[#d9d9d9] text-[14px]">
                      {item.variant.selectedType &&
                        `Type: ${item.variant.selectedType}`}
                    </p>
                    <p className="text-[#d9d9d9] text-[14px]">
                      {item.variant.selectedSmartCard &&
                        `Smart Card: ${item.variant.selectedSmartCard}`}
                    </p> */}
                      {(() => {
                        const discount = getApplicableDiscount(
                          item.product,
                          item.quantity
                        );
                        if (discount > 0) {
                          return (
                            <p className="mt-1.5 text-[12px] flex items-center text-[#ffffffbf]">
                              <span>
                                <svg
                                  className="icon icon-discount text-white w-3 h-3 mr-1.5 "
                                  viewBox="0 0 12 12"
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M7 0h3a2 2 0 0 1 2 2v3a1 1 0 0 1-.3.7l-6 6a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4l6-6A1 1 0 0 1 7 0m2 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                              {discount}% OFF Applied
                            </p>
                          );
                        }
                        return null;
                      })()}
                      {item.quantity >= item.product.quantity && (
                        <p className="text-xs text-red-400 mt-1">
                          Maximum quantity reached
                        </p>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Quantity
                          productId={item.product.id}
                          quantity={item.quantity}
                          allowZero={true}
                          onQuantityChange={(productId, newQuantity) => {
                            if (newQuantity === 0) {
                              removeFromCart(item);
                              toast.success(
                                `${item.product.name} removed from cart`
                              );
                            } else {
                              updateQuantity(productId, newQuantity);
                              if (newQuantity > item.quantity) {
                                toast.success(
                                  `Increased quantity for ${item.product.name}`
                                );
                              } else if (newQuantity < item.quantity) {
                                toast.success(
                                  `Decreased quantity for ${item.product.name}`
                                );
                              }
                              // If equal, no toast (shouldn't happen)
                            }
                          }}
                        />

                        <button
                          className="text-[#A1DBEA] mt-4 mr-[4px] cursor-pointer"
                          onClick={() => {
                            removeFromCart(item);
                            toast.success(
                              `${item.product.name} removed from cart`
                            );
                          }}
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
                    </div>
                    {discountedItem && (
                      <div className="text-sm text-white mt-1 flex flex-col text-right h-full">
                        {discountedItem.discountPercent > 0 ? (
                          <>
                            <span className="text-[#ffffffb3]">
                              ${" "}
                              {formatPrice(
                                discountedItem.basePrice * item.quantity
                              )}
                            </span>
                            <span>
                              ${" "}
                              {formatPrice(
                                discountedItem.discountedUnitPrice *
                                  item.quantity
                              )}
                            </span>
                          </>
                        ) : (
                          <span className="text-[#00d9ff] font-medium">
                            ${formatPrice(discountedItem.totalPrice)}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
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
                onClick={(e) => {
                  e.preventDefault();
                  closeCart();
                  router.push("/checkout");
                }}
                className="uppercase text-white w-full mt-4"
                variant="solid"
                style={{ minHeight: "calc(45px + 1px * 2)" }}
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
