"use client";

import Link from "next/link";
import styles from "./NavBarSubMenu.module.css";
import { useEffect, useState } from "react";

type SubMenuItem = {
  title: string;
  href: string;
};

type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string;
};

type Props = {
  subMenu?: SubMenuItem[];
  isOpen: boolean;
  onClose: () => void;
  showCategories?: boolean;
};

const NavBarSubMenu = ({ subMenu, isOpen, onClose, showCategories }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showCategories && isOpen) {
      setLoading(true);
      fetch("https://nfc.aardana.com/api/nfc-product-categories")
        .then((res) => res.json())
        .then((data) => {
          setCategories(Array.isArray(data.data) ? data.data : []);
        })
        .finally(() => setLoading(false));
    }
  }, [showCategories, isOpen]);

  if (!isOpen) return null;

  return (
    <ul
      className={`absolute py-3 bg-[#1f2128] border border-[rgba(255,255,255,0.2)] w-[14rem] mt-2 z-50 ${styles.navbarSubmenu} ${styles.navbarSubmenuOpen}`}
    >
      {showCategories ? (
        loading ? (
          <li className="text-white px-4 py-2.5">Loading...</li>
        ) : (
          <>
            {categories.length > 0 ? (
              categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/all-collection#${cat.slug}`}
                    className="text-white hover:text-[#a1dbea] flex items-center justify-between py-2.5 px-4 text-[15px] leading-5 font-semibold"
                    onClick={onClose}
                  >
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-white px-4 py-2.5">No categories found.</li>
            )}
            {/* Add the "Other" section link at the end */}
            <li>
              <Link
                href="/all-collection#other"
                className="text-white hover:text-[#a1dbea] flex items-center justify-between py-2.5 px-4 text-[15px] leading-5 font-semibold"
                onClick={onClose}
              >
                <span>Other</span>
              </Link>
            </li>
          </>
        )
      ) : (
        subMenu?.map((subItem, index) => (
          <li key={index}>
            <Link
              href={subItem.href}
              className="text-white hover:text-[#a1dbea] flex items-center justify-between py-2.5 px-4 text-[15px] leading-5 font-semibold"
              onClick={(e) => {
                if (subItem.href && subItem.href.startsWith("#")) {
                  e.preventDefault();
                  const sectionId = subItem.href.substring(1);
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
                onClose();
              }}
            >
              {subItem.title}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default NavBarSubMenu;
