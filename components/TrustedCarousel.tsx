import styles from "./TrustedCarousel.module.css";
import Image from "next/image";

const logos = [
  "/icons-carousel/Frame_1171275439.webp",
  "/icons-carousel/Frame_1171275445.webp",
  "/icons-carousel/Frame_1171275447.webp",
  "/icons-carousel/Frame_1171275448.webp",
];

const TrustedCarousel = () => {
  return (
    <section className="bg-white py-[30px]">
      <div className="max-w-[1320px] m-auto w-full overflow-hidden">
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
                  src={img}
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
