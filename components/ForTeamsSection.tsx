import Image from "next/image";
import Link from "next/link";

const ForTeamsSection = () => {
  return (
    <section className="bg-[#1F2128] flex justify-center items-center">
      <div className="container p-[20px] max-w-[1320px] m-auto">
        <div className="w-full flex justify-between items-center gap-16 max-md:gap-8 max-md:flex-col">
          <div className="w-[50%] max-md:w-full">
            <div>
              <span className="text-[#A1DBEA] font-normal text-[28px] text-center leading-[34px] pb-[24px] uppercase hidden max-md:block">
                TapOnn For Teams
              </span>
            </div>
            <Image
              src="/K4.webp"
              width={500}
              height={500}
              className="w-full h-auto"
              alt="NFC Features"
            />
          </div>
          <div className="title-header w-[50%] max-md:w-full flex flex-col  items-start max-md:items-center">
            <span className="text-[#A1DBEA] font-normal text-[18px] leading-[24px] uppercase max-md:hidden ">
              TapOnn For Teams
            </span>
            <h2 className="text-left text-white text-[42px] font-semibold leading-[50.4px] my-[6] max-md:text-center max-md:w-full max-sm:text-[24px] max-sm:leading-[28px] max-sm:text-left">
              Enhance your team productivity
            </h2>
            <p className="text-[#9E9FA7] text-[20px] font-normal max-md:text-center max-sm:text-base max-sm:text-left">
              Our suite of features simplifies lead management and boosts
              productivity. Create sub-teams, assign templates, manage profiles
              in one dashboard, update details in real-time, and integrate
              effortlessly with CRM/ERP systems.
            </p>
            <div className="flex mt-[25px]">
              <Link
                href="https://calendly.com/dhruvjolly/30min"
                className="rounded-[50px] text-base font-semibold leading-[19.2px] px-[22px] py-[12px] border border-[#04CEFA] bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)] inline-block"
              >
                Book demo
              </Link>
              <Link
                href="https://taponn.digital/pages/for-teams"
                style={{ marginLeft: "6px" }}
                className="rounded-[50px] text-base font-semibold leading-[19.2px] px-[22px] py-[12px] text-[#04CEFA] hover:text-black border border-[#04CEFA] hover:bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)] transition duration-[0.3s] inline-block"
              >
                Explore more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForTeamsSection;
