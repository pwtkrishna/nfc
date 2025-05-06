import Image from "next/image";
import Link from "next/link";
import BusinessCard from "@/data/bestseller/business.webp";
import SmartStandee from "@/data/bestseller/smart-standee.webp";
import SmartReview from "@/data/bestseller/smart-review.webp";
import BundleCards from "@/data/bestseller/bundle-cards.webp";

const images = [
  { title: "NFC Business Cards", href: "", image: BusinessCard },
  { title: "Smart Standee", href: "", image: SmartStandee },
  { title: "Review Card", href: "", image: SmartReview },
  { title: "Bundle Cards", href: "", image: BundleCards },
];

const BestSeller = () => {
  return (
    <section>
      <div className="container flex flex-col items-center justify-between max-w-[1320px] m-auto py-[35px] px-[20px]">
        <div className="bestseller-text-container flex flex-col items-center justify-between w-full">
          <span className="text-center uppercase text-[#A1DBEA] text-[18px] font-normal leading-[24px]">
            Bestsellers
          </span>
          <h2 className="text-[42px] font-semibold leading-[50.4px] capitalize my-1.5 text-center text-white">
            Our Smart Product
          </h2>
          <p className="text-[20px] text-[#9E9FA7] font-normal leading-[24px]">
            Smart, Custom-Designed NFC Products for Instant Sharing
          </p>
        </div>
        <div className="bestseller-cards-container flex pt-[20px] w-full">
          {images.map((img, i) => (
            <Link
              href={img.href}
              key={i}
              className="basis-[300px] rounded-[20px] mx-[10px] relative"
            >
              <span className="absolute text-white text-[20px] font-semibold leading-[24px] text-center pb-1.5 w-full top-[20px]">
                {img.title}
              </span>
              <Image
                src={img.image}
                alt={`logo-${i}`}
                height={500}
                width={500}
                className="w-full h-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
