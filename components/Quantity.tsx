import { useState } from "react";
import Input from "@/components/Input";
import Button from "./Button";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex flex-col max-w-[400px] my-[15px]">
      <div>
        <span className="text-[0.9rem] tracking-[0.04rem] text-[#ffffffbf] mb-[6px] inline-block">
          Quantity
        </span>
      </div>
      <div className="flex border border-[#04cefa] rounded-[65px] w-[160px] text-white relative ">
        <Button
          type="button"
          variant="none"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className={`shrink-0 text-[18px]  flex items-center justify-center ${
            quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
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

        <Input
          type="number"
          value={quantity}
          min={1}
          onChange={handleChange}
          className="text-white text-[16px] font-medium opacity-[0.85] text-center px-[5px] w-full shrink grow basis-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          style={{ minHeight: "calc((1px * 2) + 45px)" }}
        />

        <Button
          type="button"
          variant="none"
          onClick={() => setQuantity((prev) => prev + 1)}
          className="shrink-0 text-[18px] cursor-pointer flex items-center justify-center"
          style={{ width: "calc(45px / 1.0)" }}
        >
          <span className="text-[#A1DBEA] w-[10px] h-[20px] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="icon icon-plus h-full w-full"
              viewBox="0 0 10 10"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1 4.51a.5.5 0 0 0 0 1h3.5l.01 3.5a.5.5 0 0 0 1-.01V5.5l3.5-.01a.5.5 0 0 0-.01-1H5.5L5.49.99a.5.5 0 0 0-1 .01v3.5l-3.5.01z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default QuantityInput;
