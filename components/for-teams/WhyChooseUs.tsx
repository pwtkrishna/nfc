"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { whyChooseUsData } from "@/data/whyChooseUsData";

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1.2, spacing: 16, origin: "center" },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    renderMode: "performance",
    drag: true,
    rubberband: false,
  });

  return (
    <section>
      <div className="max-w-[1320px] w-full p-[20px] m-auto">
        <h2 className="text-[42px] font-semibold leading-[50.4px] text-white text-center my-[6px]">
          Why TapOnn is your best choice
        </h2>

        <div className="px-[200px] WhyTeamsChoose-img relative max-md:px-0">
          <Image
            src="/team-why-choose/main-image.webp"
            alt="Why choose us"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-[20px] bg-[#1f2128] z-[1] relative pt-[40px] w-full -mt-[50px] px-[100px]">
          {whyChooseUsData.map((item, idx) => (
            <div
              key={idx}
              className="pt-[20px] pb-[30px] px-[10px] border-2 border-[#2B2E39] rounded-[10px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-[40px] h-[40px] mx-auto mb-[10px]"
              />
              <h3 className="font-medium text-[20px] text-white mb-[8px] text-center">
                {item.title}
              </h3>
              <p className="text-[#9E9FA7] text-base text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden bg-[#1f2128] pt-[40px] px-4 -mt-[50px]">
          <div ref={sliderRef} className="keen-slider">
            {whyChooseUsData.map((item, idx) => (
              <div
                key={idx}
                className="keen-slider__slide bg-[#2B2E39] rounded-[10px] p-5 text-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h3 className="font-medium text-[18px] text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#9E9FA7] text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {whyChooseUsData.map((_, idx) => (
              <div
                key={idx}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-[#A1DBEA] opacity-100"
                    : "bg-[#A1DBEA] opacity-25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
