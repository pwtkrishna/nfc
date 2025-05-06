"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { bannerData } from "@/data/header-banner";

const HeaderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerData.length);
    }, 3000);
  }, []);

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide]);

  const prevSlide = useCallback(() => {
    stopAutoSlide();
    setCurrentIndex(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );
    startAutoSlide();
  }, [startAutoSlide]);

  const nextSlide = useCallback(() => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev + 1) % bannerData.length);
    startAutoSlide();
  }, [startAutoSlide]);

  return (
    <div className="border-b-[0.1rem] border-[rgba(255,255,255,0.08)] bg-[#1f2128]">
      <div className="container max-w-[1320px] mx-auto px-[20px] flex items-center justify-between h-[50px]">
        {/* Previous Button */}
        <div onClick={prevSlide} className="cursor-pointer" role="button">
          <span className="w-[20px] h-[20px] text-[#A1DBEA] flex items-center justify-center hover:text-[#04CEFA]">
            <svg className="rotate-90 h-[0.4rem]" viewBox="0 0 10 6">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        {/* Banner Slide */}
        <div className="relative flex-1 mx-[10px] h-full flex items-center justify-center overflow-hidden">
          {bannerData.map((data, i) => {
            const isActive = i === currentIndex;
            return (
              <p
                key={i}
                className={`absolute text-white text-center text-[0.8rem] tracking-[0.1rem] font-normal px-4 transition-all duration-700 ease-in-out
                  ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-5"
                  }
                `}
                style={{
                  transform: isActive ? "translateX(0)" : "translateX(20px)",
                }}
              >
                {data.title}
              </p>
            );
          })}
        </div>

        {/* Next Button */}
        <div onClick={nextSlide} className="cursor-pointer" role="button">
          <span className="w-[20px] h-[20px] text-[#A1DBEA] flex items-center justify-center hover:text-[#04CEFA]">
            <svg className="-rotate-90 h-[0.4rem]" viewBox="0 0 10 6">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
