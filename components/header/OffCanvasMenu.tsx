// components/OffCanvasMenu.tsx
"use client";

import { useEffect } from "react";
import NavBar from "./NavBar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const OffCanvasMenu = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#1f2128] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            className="text-white mb-4"
            onClick={onClose}
            aria-label="Close menu"
          >
            {/* Close Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
