"use client";
import Link from "next/link";
import styles from "./NavBarSubMenu.module.css";

type SubMenuItem = {
  title: string;
  href: string;
};

type Props = {
  subMenu: SubMenuItem[];
  isOpen: boolean;
};

const NavBarSubMenu = ({ subMenu, isOpen }: Props) => {
  if (!isOpen) return null;

  return (
    <ul
      className={`absolute py-3 bg-[#1f2128] border border-[rgba(255,255,255,0.2)] w-[10rem] mt-2 ${styles.navbarSubmenu} ${styles.navbarSubmenuOpen}`}
    >
      {subMenu.map((subItem, index) => (
        <li key={index}>
          <Link
            href={subItem.href}
            className="text-white hover:text-[#a1dbea] flex items-center justify-between py-2.5 px-4 text-[15px] leading-5 font-semibold"
          >
            {subItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBarSubMenu;
