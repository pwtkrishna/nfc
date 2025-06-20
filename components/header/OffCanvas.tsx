"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navBarItems } from "@/data/navBarItemsData";

type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  product_count: number;
};

type OffCanvasProps = {
  isOpen: boolean;
  onClose: () => void;
};

const OffCanvas: React.FC<OffCanvasProps> = ({ isOpen, onClose }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Fetch categories only when Shop Now submenu is opened
  useEffect(() => {
    if (
      openSubMenuIndex !== null &&
      navBarItems[openSubMenuIndex].title === "Shop Now"
    ) {
      setLoadingCategories(true);
      fetch("https://nfc.premierwebtechservices.com/api/nfc-product-categories")
        .then((res) => res.json())
        .then((data) => {
          const filter = Array.isArray(data.data)
            ? data.data.filter((item: Category) => item.product_count >= 1)
            : [];
          setCategories(filter);
        })
        .finally(() => setLoadingCategories(false));
    }
  }, [openSubMenuIndex]);

  // Main menu
  const renderMainMenu = () => (
    <ul className="space-y-4 text-white text-lg">
      {navBarItems.map((item, i) => (
        <li key={i}>
          {item.href ? (
            <Link
              href={item.href}
              className="py-[8px] px-12 text-[18px] text-white cursor-pointer block"
              onClick={() => {
                if (!item.subMenu) onClose();
              }}
            >
              {item.title}
            </Link>
          ) : (
            <button
              className="py-[8px] px-12 text-[18px] text-white cursor-pointer flex items-center justify-between w-full bg-transparent border-none"
              onClick={() => setOpenSubMenuIndex(i)}
            >
              {item.title}
              <span className="w-[15px] h-[20px] text-[#A1DBEA]">
                {/* arrow svg */}
              </span>
            </button>
          )}
        </li>
      ))}
    </ul>
  );

  // Submenu panel
  const renderSubMenu = (index: number) => {
    const item = navBarItems[index];
    // Dynamic Shop Now submenu
    if (item.title === "Shop Now") {
      return (
        <div>
          <button
            className="flex items-center gap-2 py-2 px-4 text-white"
            onClick={() => setOpenSubMenuIndex(null)}
          >
            {/* back arrow svg */}
            <span className="font-medium">{item.title}</span>
          </button>
          <ul className="space-y-4 text-white text-lg mt-4">
            {loadingCategories ? (
              <>
                <div className="animate-pulse h-4 bg-gray-700 rounded w-3/4 mx-auto my-2" />
                <div className="animate-pulse h-4 bg-gray-700 rounded w-1/2 mx-auto my-2" />
              </>
            ) : (
              <>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/all-collection#${cat.slug}`}
                      className="py-[8px] px-12 text-[18px] text-white cursor-pointer block"
                      onClick={onClose}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
                {/* <li>
                  <Link
                    href="/all-collection#other"
                    className="py-[8px] px-12 text-[18px] text-white cursor-pointer block"
                    onClick={onClose}
                  >
                    Other
                  </Link>
                </li> */}
              </>
            )}
          </ul>
        </div>
      );
    }

    // Static submenu for other items
    if (!item.subMenu) return null;
    return (
      <div>
        <button
          className="flex items-center gap-2 py-2 px-4 text-white"
          onClick={() => setOpenSubMenuIndex(null)}
        >
          {/* back arrow svg */}
          <span className="font-medium">{item.title}</span>
        </button>
        <ul className="space-y-4 text-white text-lg mt-4">
          {item.subMenu.map((subItem, idx) => (
            <li key={idx}>
              <Link
                href={subItem.href}
                className="py-[8px] px-12 text-[18px] text-white cursor-pointer block"
                onClick={onClose}
              >
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      className={`max-[767px]:w-full max-[969px]:w-1/2 fixed top-[100%] left-0 h-[calc(100vh-100%)] bg-[#1f2128] z-40 overflow-y-auto transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } ${isOpen ? "pointer-events-auto" : "pointer-events-none delay-200"}`}
    >
      <div className="h-full flex flex-col justify-between">
        <nav className="py-[2rem]">
          {openSubMenuIndex === null
            ? renderMainMenu()
            : renderSubMenu(openSubMenuIndex)}
        </nav>

        <div className="px-8 py-6 bg-[#ffffff08]">
          <ul className="flex items-center">
            <li>
              <Link
                href="#"
                className="inline-block p-[12px] cursor-pointer text-[14px] "
              >
                <span className="flex items-center justify-center text-[#A1DBEA] w-[20px] h-[20px]">
                  <svg className="icon icon-twitter" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7.273 2.8 10.8 7.822 15.218 2.8h1.768l-5.4 6.139 5.799 8.254h-4.658l-3.73-5.31-4.671 5.31H2.558l5.654-6.427L2.615 2.8zm6.242 13.125L5.07 4.109h1.405l8.446 11.816z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-block p-[12px] cursor-pointer text-[14px] "
              >
                <span className="flex items-center justify-center text-[#A1DBEA] w-[20px] h-[20px]">
                  <svg className="icon icon-facebook" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="M18 10.049C18 5.603 14.419 2 10 2s-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-block p-[12px] cursor-pointer text-[14px] "
              >
                <span className="flex items-center justify-center text-[#A1DBEA] w-[20px] h-[20px]">
                  <svg className="icon icon-instagram" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.4 2.4 0 0 0-.912.593 2.5 2.5 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23s.01 2.39.046 3.229c.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046s2.39-.01 3.23-.046c.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23s-.01-2.39-.055-3.229c-.027-.784-.164-1.204-.274-1.495a2.4 2.4 0 0 0-.593-.913 2.6 2.6 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045a63 63 0 0 1 3.302.045c.664.014 1.321.14 1.943.374a4 4 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.9 3.9 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.15 4.15 0 0 1-1.414-.922 4.1 4.1 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.4 4.4 0 0 1 .92-1.414 4.2 4.2 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805m1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93m5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-block p-[12px] cursor-pointer text-[14px] "
              >
                <span className="flex items-center justify-center text-[#A1DBEA] w-[20px] h-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-snapchat"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M3.6043 16.9074H0.265974V5.61918H3.6043V16.9074ZM1.93334 4.07937C0.865852 4.07937 0 3.15095 0 2.03006C7.64063e-09 1.49165 0.203691 0.975301 0.566263 0.594591C0.928835 0.213881 1.42059 0 1.93334 0C2.4461 0 2.93785 0.213881 3.30042 0.594591C3.66299 0.975301 3.86668 1.49165 3.86668 2.03006C3.86668 3.15095 3.00047 4.07937 1.93334 4.07937ZM16.0986 16.9074H12.7675V11.4123C12.7675 10.1027 12.7423 8.4233 11.0318 8.4233C9.29614 8.4233 9.03017 9.84612 9.03017 11.318V16.9074H5.69543V5.61918H8.89718V7.15899H8.94391C9.38959 6.27209 10.4783 5.33613 12.1025 5.33613C15.4811 5.33613 16.1022 7.67226 16.1022 10.7066V16.9074H16.0986Z"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-block p-[12px] cursor-pointer text-[14px] "
              >
                <span className="flex items-center justify-center text-[#A1DBEA] w-[20px] h-[20px]">
                  <svg className="icon icon-youtube" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="M18.16 5.87c.34 1.309.34 4.08.34 4.08s0 2.771-.34 4.08a2.13 2.13 0 0 1-1.53 1.53c-1.309.34-6.63.34-6.63.34s-5.321 0-6.63-.34a2.13 2.13 0 0 1-1.53-1.53c-.34-1.309-.34-4.08-.34-4.08s0-2.771.34-4.08a2.17 2.17 0 0 1 1.53-1.53C4.679 4 10 4 10 4s5.321 0 6.63.34a2.17 2.17 0 0 1 1.53 1.53M8.3 12.5l4.42-2.55L8.3 7.4z"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
