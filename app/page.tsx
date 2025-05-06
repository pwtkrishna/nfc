import HomeHeroSection from "@/components/HomeHeroSection";
import TrustedCarousel from "@/components/TrustedCarousel";
import Image from "next/image";
import DigitalProfile from "@/data/digital_profile_with_text_1.webp";
import BestSeller from "@/components/BestSeller";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <TrustedCarousel />
      <section className=" m-auto bg-[#1F2128]">
        <div className="container flex items-center justify-between gap-[65px] p-[20px] max-w-[1320px] max-md:flex-col">
          <div className="w-[50%] max-md:w-full">
            <h2 className="text-white text-[42px] font-semibold leading-[50.4px] text-left pr-[84px] max-sm:text-[32px] max-[468px]:text-[24px] max-sm:leading-[38px]">
              Why a Digital Profile is Important?
            </h2>
            <div className="pt-[28px]">
              <p className="text-[#9E9FA7] text-[18px] leading-[27px] text-left font-normal">
                In today’s fast-paced world, your first impression matters more
                than ever. TapOnn’s smart digital profile ensures every
                interaction is unique, professional, and memorable. Replace the
                hassle of sharing multiple links or repeating details with just
                one powerful scan or tap. Share everything in one go—contact
                details, social profiles, review links, documents, and more.
                Literally, anything you need to connect or impress can be added
                to your TapOnn profile.
              </p>
              <br />
              <p className="text-[#9E9FA7] text-[18px] leading-[27px] text-left font-normal">
                Build smarter, faster, and more meaningful connections globally.
                Whether you’re networking at an event, meeting a client, or
                connecting online, TapOnn ensures seamless sharing anytime,
                anywhere.
              </p>
            </div>
          </div>
          <div className="w-[38%] max-md:w-full">
            <Image src={DigitalProfile} alt="Digital Profile" />
          </div>
        </div>
      </section>
      <BestSeller />
      <section>
        <div className="container pt-[95px] pb-[35px] px-[20px] max-w-[1320px] m-auto">
          <div className="flex">
            <div className="w-[50%]">
              <h2 className="text-white text-[42px] font-semibold leading-[50.4px] text-left">
                TapOnn – Your One-Stop Solution !
              </h2>
            </div>
            <div className="w-[510px]">
              <p className="text-[#9E9FA7] text-[18px] font-normal leading-[21.6px] text-left">
                Whether <strong>physically or virtually</strong>, TapOnn makes
                information sharing seamless and effortless. From{" "}
                <strong>individuals to entire organizations</strong>, TapOnn
                provides <strong>smart, scalable solutions</strong> to connect,
                network, and grow—anytime, anywhere.
                <br />
                <br />
                🚀
                <strong>
                  Tap. Share. Connect. The Future of Information Sharing Starts
                  Here!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
