"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { everyOneCardData, EveryOneType } from "@/data/everyOneCardData";
import { useState } from "react";

const EveryOneCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 567px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 568px) and (max-width: 1023px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
    slides: { perView: 3, spacing: 10 },
  });

  return (
    <section>
      <div className="max-w-[1320px] py-[35px] px-[20px] m-auto w-full">
        <h2 className="text-white capitalize text-[42px] font-semibold leading-[50.4px] text-center my-[6px]">
          NFC is for Everyone
        </h2>

        <div ref={sliderRef} className="keen-slider pt-[15px]">
          {everyOneCardData.map((card: EveryOneType, index: number) => (
            <div
              key={index}
              className="keen-slider__slide bg-[#2B2E39] p-[20px] rounded-[12px]"
            >
              <div className="w-full mb-4 rounded-[12px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="w-full h-full block"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">
                {card.title}
              </h3>
              <p className="text-[#9E9FA7] text-base font-normal leading-[19.2px] text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="hidden justify-center mt-4 gap-2 max-lg:flex">
          {everyOneCardData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-[10px] h-[10px] rounded-full transition-opacity duration-300 ${
                currentSlide === idx
                  ? "bg-[#04CEFA] opacity-[1]"
                  : "bg-[#04CEFA] opacity-[0.7]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EveryOneCards;
