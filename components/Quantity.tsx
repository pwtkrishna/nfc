"use client";

import { useState } from "react";
import Button from "./Button";

interface QuantityProps {
  onQuantityChange: (quantity: number) => void;
}

const Quantity: React.FC<QuantityProps> = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity((prev) => {
      const newQuantity = prev > 1 ? prev - 1 : 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="flex flex-col max-w-[400px] my-[15px]">
      <div>
        <span className="text-[0.9rem] tracking-[0.04rem] text-[#ffffffbf] mb-[6px] inline-block">
          Quantity
        </span>
      </div>
      <div
        className="flex items-center border border-[#04cefa] rounded-[65px] w-[160px] text-white relative "
        style={{ minHeight: "calc((1px * 2) + 45px)" }}
      >
        <Button
          type="button"
          variant="none"
          className={`shrink-0 text-[18px]  flex items-center justify-center ${
            quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handleDecrement}
          style={{ width: "calc(45px / 1.0)" }}
        >
          <span className="text-[#A1DBEA] w-[10px] h-[20px] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="icon icon-minus h-full w-full"
              viewBox="0 0 10 2"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 1 1 0 1H1A.5.5 0 0 1 .5 1"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </Button>

        <span className="text-white text-[16px] font-medium opacity-[0.85] text-center px-[5px] w-full shrink grow basis-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none">
          {quantity}
        </span>
        <Button
          type="button"
          variant="none"
          onClick={handleIncrement}
          className="shrink-0 text-[18px] cursor-pointer flex items-center justify-center"
          style={{ width: "calc(45px / 1.0)" }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
