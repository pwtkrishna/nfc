"use client";

import { useEffect, useState } from "react";
import HeaderBanner from "../HeaderBanner";
import Logo from "../Logo";
import HeaderIcons from "./HeaderIcons";
import NavBar from "./NavBar";
import OffCanvas from "./OffCanvas";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowHeader(true);
        setShowBanner(true);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
        setShowBanner(false);
      } else {
        setShowHeader(false);
        setShowBanner(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleCanvas = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-[#141518] ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {showBanner && (
          <div className="bg-[#141518]">
            <HeaderBanner />
          </div>
        )}

        <header className="bg-[#1f2128] py-2 px-6 -mb-0.5 relative z-50">
          <div className="flex items-center justify-between">
            <div className="hidden max-[969px]:block h-[2.8rem] w-[2.8rem]">
              <button
                className="hidden max-[967px]:flex items-center justify-center text-white cursor-pointer bg-[#35373E] rounded-[8px] w-full h-full"
                onClick={toggleCanvas}
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="icon icon-hamburger h-[1.2rem] w-[1.2rem] text-[#00d1fd] transition-[transform,opacity] duration-150 ease-in-out"
                    viewBox="0 0 18 16"
                  >
                    <path
                      fill="currentColor"
                      d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="icon icon-close h-[1.2rem] w-[1.2rem] text-[#00d1fd] transition-[transform,opacity] duration-150 ease-in-out"
                    viewBox="0 0 18 17"
                  >
                    <path
                      fill="currentColor"
                      d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="w-[6rem] max-md:w-[4rem]">
              <Logo />
            </div>
            <NavBar />
            <HeaderIcons />
          </div>
        </header>

        {/* OffCanvas placed just below header */}
        <OffCanvas isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      <div className="h-[150px]" />
    </>
  );
};

export default Header;
