"use client";

import { navBarItems } from "@/data/navBarItemsData";
import NavBarItem from "./NavBarItem";
import { useState } from "react";

const NavBar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <nav className="flex items-center justify-center max-[967px]:hidden">
      <ul className="flex space-x-6 p-4">
        {navBarItems.map((item, index) => (
          <NavBarItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
