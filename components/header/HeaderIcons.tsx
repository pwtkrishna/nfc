"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

const HeaderIcons = () => {
  const { setIsCartOpen, cart } = useCartStore();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
      {/* <Link href="/manage-profile">
        <div className="user-icon bg-[#35373E] rounded-[8px] h-[44px] w-[44px] flex justify-center items-center max-[870px]:hidden cursor-pointer">
          <svg
            fill="none"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="22"
            height="22"
            viewBox="0 0 80.13 80.13"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M48.355,17.922c3.705,2.323,6.303,6.254,6.776,10.817c1.511,0.706,3.188,1.112,4.966,1.112
		c6.491,0,11.752-5.261,11.752-11.751c0-6.491-5.261-11.752-11.752-11.752C53.668,6.35,48.453,11.517,48.355,17.922z M40.656,41.984
		c6.491,0,11.752-5.262,11.752-11.752s-5.262-11.751-11.752-11.751c-6.49,0-11.754,5.262-11.754,11.752S34.166,41.984,40.656,41.984
		z M45.641,42.785h-9.972c-8.297,0-15.047,6.751-15.047,15.048v12.195l0.031,0.191l0.84,0.263
		c7.918,2.474,14.797,3.299,20.459,3.299c11.059,0,17.469-3.153,17.864-3.354l0.785-0.397h0.084V57.833
		C60.688,49.536,53.938,42.785,45.641,42.785z M65.084,30.653h-9.895c-0.107,3.959-1.797,7.524-4.47,10.088
		c7.375,2.193,12.771,9.032,12.771,17.11v3.758c9.77-0.358,15.4-3.127,15.771-3.313l0.785-0.398h0.084V45.699
		C80.13,37.403,73.38,30.653,65.084,30.653z M20.035,29.853c2.299,0,4.438-0.671,6.25-1.814c0.576-3.757,2.59-7.04,5.467-9.276
		c0.012-0.22,0.033-0.438,0.033-0.66c0-6.491-5.262-11.752-11.75-11.752c-6.492,0-11.752,5.261-11.752,11.752
		C8.283,24.591,13.543,29.853,20.035,29.853z M30.589,40.741c-2.66-2.551-4.344-6.097-4.467-10.032
		c-0.367-0.027-0.73-0.056-1.104-0.056h-9.971C6.75,30.653,0,37.403,0,45.699v12.197l0.031,0.188l0.84,0.265
		c6.352,1.983,12.021,2.897,16.945,3.185v-3.683C17.818,49.773,23.212,42.936,30.589,40.741z"
                stroke="#04CEFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </Link> */}
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
