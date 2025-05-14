import { CoupounProps } from "@/types/productProps";
import { useState } from "react";

const Coupoun = ({ coupoun }: CoupounProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="relative bg-[url('/coupoun.webp')] bg-no-repeat bg-[length:100%_100%] pt-[15px] px-[50px] pb-[20px]">
        <h4 className="text-[24px] font-semibold leading-[28px] text-left text-white mb-[10px]">
          Offers
        </h4>
        <p className="text-sm font-normal text-left text-[#ffffffc7]">
          Get the best deals now!
        </p>

        <span
          onClick={() => setIsActive(!isActive)}
          className={`absolute top-1/2 right-[10%] transform -translate-y-1/2 w-[18px] h-[10px] bg-[url('/coupoun-btn.png')] bg-contain bg-no-repeat cursor-pointer ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
        ></span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {coupoun?.map((el, index) => (
          <div
            key={index}
            className="bg-[url('/coupoun-all.webp')] bg-no-repeat bg-[length:100%_100%] py-[30px] px-[50px]"
          >
            <h4 className="text-[18px] font-medium leading-[18px] text-left text-white mb-[12px]">
              {el.title}
            </h4>
            <p className="text-sm font-normal text-left text-[#ffffffc7]">
              {el.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupoun;
