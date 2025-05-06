"use client";

import { useEffect, useState } from "react";
import HeaderBanner from "../HeaderBanner";
import Logo from "../Logo";
import HeaderIcons from "./HeaderIcons";
import NavBar from "./NavBar";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Near top: show both
        setShowHeader(true);
        setShowBanner(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up: show header only
        setShowHeader(true);
        setShowBanner(false);
      } else {
        // Scrolling down: hide both
        setShowHeader(false);
        setShowBanner(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* fixed container for header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* banner is conditionally shown */}
        {showBanner && (
          <div className="bg-[#141518]">
            <HeaderBanner />
          </div>
        )}

        <header className="bg-[#1f2128] py-2 px-6">
          <div className="flex items-center justify-between">
            <Logo />
            <NavBar />
            <HeaderIcons />
          </div>
        </header>
      </div>

      {/* push page content down so it's not under fixed header */}
      <div className="h-[110px]" />
    </>
  );
};

export default Header;
