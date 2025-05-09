import Image from "next/image";

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: "/team-benefits/Frame.png",
    title: "Maximize ROI from Sales Events",
    description: "Instant lead collection and seamless info sharing.",
  },
  {
    icon: "/team-benefits/Frame.png",
    title: "Save $150 Per Employee",
    description: "Annually. Cut costs by eliminating paper printing.",
  },
  {
    icon: "/team-benefits/Frame.png",
    title: "Make a Smart & Lasting Impression",
    description: "Stand out with digital profiles and tools.",
  },
  {
    icon: "/team-benefits/Frame.png",
    title: "Boost Team Productivity & Focus on Sales",
    description: "Remove manual data entry, close deals faster.",
  },
];

const TeamBenefitsSection = () => {
  return (
    <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-4 border border-[#ffffff29] backdrop-blur-[27px] rounded-[20px] py-[25px] px-[50px] gap-[20px] -mt-[20px] max-lg:mt-[20px] bg-[#20212840]">
      {benefits.map((benefit, index) => (
        <div key={index}>
          <div className="flex items-center justify-center mb-3">
            <Image
              src={benefit.icon}
              alt={benefit.title}
              width={24}
              height={24}
            />
          </div>
          <div>
            <p className="text-white text-center font-medium text-[18px] leading-[21.6px] mb-[8px]">
              {benefit.title}
            </p>
            <p className="text-sm leading-[16.8px] text-[#D9D9D9] text-center">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamBenefitsSection;
