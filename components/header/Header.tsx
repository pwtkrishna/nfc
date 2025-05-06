"use client";

import { useEffect, useState } from "react";
import HeaderBanner from "../HeaderBanner";
import Logo from "../Logo";
import HeaderIcons from "./HeaderIcons";
import NavBar from "./NavBar";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShowHeader(true); // scrolling up or near top
      } else {
        setShowHeader(false); // scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative z-50">
      <HeaderBanner />
      <header
        className={`fixed top-0 left-0 w-full bg-[#1f2128] py-2 px-6 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <NavBar />
          <HeaderIcons />
        </div>
      </header>
    </div>
  );
};

export default Header;
