"use client";

import Link from "next/link";
import styles from "./NavBarSubMenu.module.css";
import useSWR from "swr";

type SubMenuItem = {
  title: string;
  href: string;
};

type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  product_count: number;
};

type Props = {
  subMenu?: SubMenuItem[];
  isOpen: boolean;
  onClose: () => void;
  showCategories?: boolean;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const NavBarSubMenu = ({ subMenu, isOpen, onClose, showCategories }: Props) => {
  // SWR hook (fetches only if showCategories && isOpen)
  const { data, isLoading } = useSWR(
    showCategories && isOpen
      ? "https://nfc.aardana.com/api/nfc-product-categories"
      : null,
    fetcher
  );

  // Filter categories with at least 1 product
  const categories: Category[] = Array.isArray(data?.data)
    ? data.data.filter((item: Category) => item.product_count >= 1)
    : [];

  if (!isOpen) return null;

  return (
    <ul
      className={`absolute py-3 bg-[#1f2128] border border-[rgba(255,255,255,0.2)] w-[14rem] mt-2 z-50 ${styles.navbarSubmenu} ${styles.navbarSubmenuOpen}`}
    >
      {showCategories ? (
        isLoading ? (
          <li className="text-white px-4 py-2.5">Loading...</li>
        ) : (
          <>
            {categories.length > 0
              ? categories.map((cat) => (
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
              : ""}
            {/* Optionally add the "Other" section link */}
            {/* <li>
              <Link
                href="/all-collection#other"
                className="text-white hover:text-[#a1dbea] flex items-center justify-between py-2.5 px-4 text-[15px] leading-5 font-semibold"
                onClick={onClose}
              >
                <span>Other</span>
              </Link>
            </li> */}
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
