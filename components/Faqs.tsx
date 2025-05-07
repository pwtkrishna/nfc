"use client";

import { useState } from "react";
import { faqData } from "@/data/faqData"; // Adjust the path as needed

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
      <div className="bg-[#2B2E39] rounded-[20px] p-[30px]">
        <h2 className="text-white mb-[20px] text-[42px] font-semibold leading-[50.4px] text-center">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#3A3D4A] rounded-[10px] text-white p-5"
            >
              <button
                className="flex justify-between w-full text-left text-lg font-semibold"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-3 text-sm whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
