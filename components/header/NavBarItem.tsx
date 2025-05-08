"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import type { NavBarItem as NavBarItemType } from "@/types/NavBarItemTypes";
import NavBarSubMenu from "./NavBarSubMenu";

type Props = {
  item: NavBarItemType;
  isOpen: boolean;
  onToggle: () => void;
};

const NavBarItem = ({ item, isOpen, onToggle }: Props) => {
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        if (isOpen) onToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

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
          onClick={onToggle}
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
