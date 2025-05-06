"use client";
import type { NavBarType } from "@/types/NavBarItemTypes";
import NavBarItem from "./NavBarItem";
import { useState } from "react";

const navBarItems: NavBarType = [
  { title: "Home", href: "/" },
  {
    title: "Shop Now",
    subMenu: [
      { title: "NFC Card", href: "/all-collection/#nfc-card" },
      {
        title: "Standees and Review cards",
        href: "/all-collection/#product-card",
      },
      { title: "Bundle Offer", href: "/all-collection/#bundle-offer" },
    ],
  },
  { title: "For Teams", href: "/for-teams" },
  {
    title: "Company",
    subMenu: [
      { title: "About Us", href: "/about" },
      { title: "FAQs", href: "/faqs" },
      { title: "Blogs", href: "/blogs" },
      { title: "In the news", href: "/in-the-news" },
    ],
  },
];

const NavBar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <nav>
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
