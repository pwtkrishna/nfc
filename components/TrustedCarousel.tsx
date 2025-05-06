import styles from "./TrustedCarousel.module.css";
import Mercedees from "@/data/icons-carousel/Frame_1171275439.webp";
import Honda from "@/data/icons-carousel/Frame_1171275445.webp";
import Hemleys from "@/data/icons-carousel/Frame_1171275447.webp";
import FarziCafe from "@/data/icons-carousel/Frame_1171275448.webp";
import Image from "next/image";

const logos = [Mercedees, Honda, Hemleys, FarziCafe];

const TrustedCarousel = () => {
  return (
    <section className="bg-white py-[30px]">
      <div className="container overflow-hidden">
        <div className="text-center mb-6">
          <span className="text-[#04CEFA] text-base font-normal uppercase">
            Top professionals and team around the world
          </span>
          <h2 className="text-[#1F2128] font-semibold text-[38px] leading-[54px]">
            Trust NFC
          </h2>
        </div>

        {/* Image Carousel */}
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {[...logos, ...logos].map((img, i) => (
              <div key={i} className={styles.logoBox}>
                <Image
                  src={img.src}
                  alt={`logo-${i}`}
                  height={100}
                  width={100}
                  className="h-[50px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCarousel;
