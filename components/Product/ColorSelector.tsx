"use client";

import { ColorProps } from "@/types/productProps";
import Button from "../Button";
import { useState } from "react";

const ColorSelector = ({ colors }: ColorProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  function handleColorSelect(index: number) {
    setSelectedIndex(index);
  }

  return (
    <div className="flex flex-col my-[1.2rem]">
      <span className="text-[0.9rem] tracking-[0.04rem] text-[#ffffffbf]">
        Color
      </span>
      <div>
        {colors.map((color, index) => (
          <Button
            key={index}
            variant="color"
            onClick={() => handleColorSelect(index)}
            className={`${
              selectedIndex === index
                ? "border-[#04cefa]"
                : "border-[#ffffff8c]"
            }`}
          >
            {color}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
