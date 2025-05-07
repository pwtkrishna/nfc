import Image from "next/image";
import Link from "next/link";

const images = [
  { title: "NFC Business Cards", href: "", image: "/bestseller/business.webp" },
  { title: "Smart Standee", href: "", image: "/bestseller/smart-standee.webp" },
  { title: "Review Card", href: "", image: "/bestseller/smart-review.webp" },
  { title: "Bundle Cards", href: "", image: "/bestseller/bundle-cards.webp" },
];

const BestSeller = () => {
  return (
    <section>
      <div className="container flex flex-col items-center justify-between max-w-[1320px] w-full m-auto py-[35px] px-[20px] overflow-hidden">
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
        <div
          className="bestseller-cards-container w-full flex pt-[20px] mr-[-20px] max-md:flex-wrap max-md:gap-y-[10px]"
          style={{ overflow: "overlay" }}
        >
          {images.map((img, i) => (
            <Link
              href={img.href}
              key={i}
              className="smart-product-link basis-[300px] shrink-0 grow-0 rounded-[20px] mx-[10px] relative overflow-hidden"
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
