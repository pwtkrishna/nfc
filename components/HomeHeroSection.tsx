import Image from "next/image";
import PhoneImage from "@/data/home-banner.webp";
import Link from "next/link";

const HomeHeroSection = () => {
  return (
    <section className="home-hero-banner">
      <div className="container flex max-md:flex-col max-md:items-center max-md:gap-[20px] py-[35px] px-[20px] max-w-[1320px] mx-auto ">
        <div className="w-[45%] max-md:w-full max-md:order-2">
          <div>
            <h1 className="text-[56px] text-white font-semibold leading-[67.2px] max-xl:text-[46px] max-xl:leading-[60.2px] max-lg:text-[42px] max-lg:leading-[51.2px;] max-sm:text-[32px] max-sm:leading-[30px]">
              #1 Platform for Information Sharing
            </h1>
            <h2 className="text-[#A1DBEA] text-[24px] font-semibold leading-[28px] pt-[12px] pb-[18px] max-sm:text-[18px] max-sm:leading-[21.8px]">
              Share Instantly. Connect Effortlessly
            </h2>
            <p className="text-[18px] max-sm:text-base text-white leading-[21.6px]">
              Your ultimate digital profile platform for seamless information
              sharing, connecting smartly while embracing sustainable,
              eco-friendly practices. Step into a smarter, greener future with
              Taponn! Get TapOnn Create my Profile
            </p>
          </div>
          <div className="flex pt-[38px] gap-x-[15px]">
            <Link
              href="#"
              className="rounded-[50px] text-base font-semibold leading-[19.2px] px-[22px] py-[12px] border border-[#04CEFA] bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)]"
            >
              Get NFC
            </Link>
            <Link
              href="#"
              className="rounded-[50px] text-base font-semibold leading-[19.2px] px-[22px] py-[12px] text-[#04CEFA] hover:text-black border border-[#04CEFA] hover:bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)] transition duration-[0.3s]"
            >
              Create my Profile
            </Link>
          </div>
        </div>
        <div className="w-[45%] max-md:w-[60%] max-sm:w-[100%]">
          <div>
            <Image
              src={PhoneImage}
              alt="NFC Showcase"
              className="w-full"
              priority
            />
          </div>
        </div>
        <div className="w-[10%] flex flex-col max-md:flex-row justify-end max-md:justify-between gap-[25px] max-md:w-full max-md:order-3 ">
          <div className="text-[#ffffff99] text-[18px] font-normal leading-[21.6px] flex flex-col text-left max-md:flex max-md:flex-col max-md:w-full">
            <span className="text-[#A1DBEA] text-[32px] leading-[38.4px] text-left font-semibold">
              1M+
            </span>
            Connections Made
          </div>
          <div className="text-[#ffffff99] text-[18px] font-normal leading-[21.6px] flex flex-col text-left pr-[17px] max-md:flex max-md:flex-col max-md:w-full">
            <span className="text-[#A1DBEA] text-[32px] leading-[38.4px] text-left font-semibold">
              100k+
            </span>
            Active Users
          </div>
          <div className="text-[#ffffff99] text-[18px] font-normal leading-[21.6px] flex flex-col text-left max-md:flex max-md:flex-col max-md:w-full">
            <span className="text-[#A1DBEA] text-[32px] leading-[38.4px] text-left font-semibold">
              100+
            </span>
            Global Brands
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
