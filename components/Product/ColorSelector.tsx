"use client";

import { ColorProps } from "@/types/productProps";
import Button from "../Button";
// import { useState } from "react";

interface Props extends ColorProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const ColorSelector: React.FC<Props> = ({ colors = [], selectedColor, onColorSelect }) => {
  // const [selectedIndex, setSelectedIndex] = useState<number | null>(0);



  return (
    <div className="flex flex-col my-[1.2rem]">
      <span className="text-[0.9rem] tracking-[0.04rem] text-[#ffffffbf]">
        Color
      </span>
      <div>
        {colors?.map((color, index) => (
          <Button
            key={index}
            variant="color"
            onClick={() => onColorSelect(color)}
            title={color}
            className={`${selectedColor === color
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
