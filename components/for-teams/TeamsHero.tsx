import Image from "next/image";
import LightLink from "../LightLink";
import FilledLink from "../FilledLink";
import TeamBenefitsSection from "./TeamBenefitsSection";

const TeamsHero = () => {
  return (
    <section className="hero-banner team-desktop-banner">
      <div className="max-w-[1320px] px-[20px] py-[35px] m-auto">
        <div className="flex items-start gap-[40px] max-md:flex-col-reverse max-md:items-center">
          <div className="grow shrink">
            <h1 className="text-[40px] leading-[1.2] font-semibold text-transparent bg-clip-text bg-[linear-gradient(4deg,_#04CEFA_-20.56%,_#A1DBEA_28.15%,_#FFFFFF_94.5%)] max-lg:text-[26px] max-lg:leading-[32px] max-xl:text-[28px]">
              Empower Your Team with the Smartest Information-Sharing Platform
            </h1>
            <span className="text-[#A1DBEA] mt-[10px] mb-[20px] text-[18px] inline-block">
              Say goodbye to outdated business cards and scattered contact
              details.
            </span>
            <p className="text-[#D9D9D9] font-normal text-[16px] leading-[24px] tracking-normal">
              TapOnn for Teams is your all-in-one solution for seamless team
              profile management, effortless lead collection, and data-driven
              insights—helping your business make smarter connections
            </p>
            <div className="flex items-center gap-[15px] mt-[35px]">
              <FilledLink href="#">Start Free Trial</FilledLink>
              <LightLink href="#">Book a Demo</LightLink>
            </div>
          </div>
          <div className="basis-[50%] grow-0 shrink-0 max-md:basis-[56%] max-md:text-center">
            <Image
              src="/hero.webp"
              alt="hero banner"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
        <TeamBenefitsSection />
      </div>
    </section>
  );
};

export default TeamsHero;
