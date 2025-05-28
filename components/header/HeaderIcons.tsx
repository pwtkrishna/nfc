"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

const HeaderIcons = () => {
  const { setIsCartOpen, cart } = useCartStore();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0); // Total items in cart

  return (
    <div className="flex gap-2">
      {/* <div className="search-icon bg-[#35373E] rounded-[8px] h-[44px] w-[44px] flex justify-center items-center max-[870px]:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
            fill="#04CEFA"
          ></path>
          <path
            d="M22.0004 22.75C21.8104 22.75 21.6204 22.68 21.4704 22.53L19.4704 20.53C19.1804 20.24 19.1804 19.76 19.4704 19.47C19.7604 19.18 20.2404 19.18 20.5304 19.47L22.5304 21.47C22.8204 21.76 22.8204 22.24 22.5304 22.53C22.3804 22.68 22.1904 22.75 22.0004 22.75Z"
            fill="#04CEFA"
          ></path>
        </svg>
      </div> */}
      <Link href="/account">
        <div className="user-icon bg-[#35373E] rounded-[8px] h-[44px] w-[44px] flex justify-center items-center max-[870px]:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M11.0003 11C13.5316 11 15.5837 8.94797 15.5837 6.41666C15.5837 3.88536 13.5316 1.83333 11.0003 1.83333C8.46902 1.83333 6.41699 3.88536 6.41699 6.41666C6.41699 8.94797 8.46902 11 11.0003 11Z"
              stroke="#04CEFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M18.8743 20.1667C18.8743 16.6192 15.3451 13.75 11.0001 13.75C6.65514 13.75 3.12598 16.6192 3.12598 20.1667"
              stroke="#04CEFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </Link>

      <div
        className="cart-icon bg-[#35373E] rounded-[8px] h-[44px] w-[44px] flex justify-center items-center cursor-pointer"
        onClick={() => setIsCartOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M8.07615 1.83333L4.75781 5.16083"
            stroke="#04CEFA"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13.9238 1.83333L17.2422 5.16083"
            stroke="#04CEFA"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1.83301 7.19584C1.83301 5.5 2.74051 5.3625 3.86801 5.3625H18.1313C19.2588 5.3625 20.1663 5.5 20.1663 7.19584C20.1663 9.16667 19.2588 9.02917 18.1313 9.02917H3.86801C2.74051 9.02917 1.83301 9.16667 1.83301 7.19584Z"
            stroke="#04CEFA"
            strokeWidth="1.5"
          ></path>
          <path
            d="M8.94629 12.8333V16.0875"
            stroke="#04CEFA"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M13.1631 12.8333V16.0875"
            stroke="#04CEFA"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M3.20801 9.16666L4.50051 17.0867C4.79384 18.865 5.49967 20.1667 8.12134 20.1667H13.6488C16.4997 20.1667 16.9213 18.92 17.2513 17.1967L18.7913 9.16666"
            stroke="#04CEFA"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
        {itemCount > 0 && (
          <span className="absolute bottom-1.5 right-5 bg-[#04CEFA] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default HeaderIcons;
