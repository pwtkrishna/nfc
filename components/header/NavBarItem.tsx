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

  const isActiveLink = item.href === pathname;

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

  return (
    <li className="relative" ref={itemRef}>
      {item.href ? (
        <Link href={item.href} className={linkClass}>
          {item.title}
        </Link>
      ) : (
        <span onClick={onToggle} className={linkClass}>
          {item.title}
        </span>
      )}

      {item.subMenu && <NavBarSubMenu subMenu={item.subMenu} isOpen={isOpen} />}
    </li>
  );
};

export default NavBarItem;
