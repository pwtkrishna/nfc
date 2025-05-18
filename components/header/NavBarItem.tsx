"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isActiveLink =
    item.href === pathname || item.href === `#${pathname.split("#")[1]}`;

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

  const linkClass =
    "leading-5 cursor-pointer transition-colors duration-200 " +
    (isActiveLink || isOpen
      ? "text-[#a1dbea]"
      : "text-white hover:text-[#a1dbea]");

  const handleClick = (e: React.MouseEvent) => {
    if (item.href && item.href.startsWith("#")) {
      e.preventDefault();
      const sectionId = item.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Close submenu if open
    if (isOpen) {
      onToggle();
    }
  };

  return (
    <li className="relative" ref={itemRef}>
      {item.href ? (
        <Link href={item.href} className={linkClass} onClick={handleClick}>
          {item.title}
        </Link>
      ) : (
        <span onClick={onToggle} className={linkClass}>
          {item.title}
        </span>
      )}

      {item.subMenu && (
        <NavBarSubMenu
          subMenu={item.subMenu}
          isOpen={isOpen}
          onClose={onToggle}
        />
      )}
    </li>
  );
};

export default NavBarItem;
