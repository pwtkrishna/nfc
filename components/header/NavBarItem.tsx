"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import type { NavBarItem as NavBarItemType } from "@/types/NavBarItemTypes";
import NavBarSubMenu from "./NavBarSubMenu";

type Props = {
  item: NavBarItemType;
};

const NavBarItem = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // 🔒 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li className="relative" ref={itemRef}>
      {item.href ? (
        <Link
          href={item.href}
          className="text-white leading-5 hover:text-[#a1dbea]"
        >
          {item.title}
        </Link>
      ) : (
        <span
          onClick={toggleDropdown}
          className="cursor-pointer text-white leading-5 hover:text-[#a1dbea]"
        >
          {item.title}
        </span>
      )}

      {item.subMenu && <NavBarSubMenu subMenu={item.subMenu} isOpen={isOpen} />}
    </li>
  );
};

export default NavBarItem;
