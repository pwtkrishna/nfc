import { TeamContentType } from "@/data/teamContentSwitchData";
import Image from "next/image";

type Props = {
  activeData: TeamContentType;
};

const ContentSwitchContainer = ({ activeData }: Props) => {
  return (
    <div className="mt-[30px]">
      <div
        className="flex items-center justify-between max-[638px]:flex-col border-[#2B2E39] rounded-[15px] py-[30px] px-[50px] max-lg:p-[20px] max-sm:pb-[50px] max-sm:gap-[26px]"
        style={{
          backgroundImage: `url(${activeData.backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[34%] max-lg:w-[42%] max-md:w-[50%] max-sm:w-full">
          <Image
            src={activeData.image}
            alt={activeData.title}
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="w-[50%] max-lg:w-[55%] max-md:w-[50%] max-sm:w-full">
          {activeData.descriptions.map((desc, i) => (
            <p
              key={i}
              className={`font-normal text-[18px] max-lg:text-base max-sm:text-sm leading-[27px] max-lg:leading-[22px] max-sm:leading-[20px] mb-[32px] max-lg:mb-[18px] ${
                activeData.backgroundImage ===
                "/team-content-switch/FrameBlue.webp"
                  ? "text-[#1F2128]"
                  : "text-[#9E9FA7]"
              }`}
              dangerouslySetInnerHTML={{ __html: desc }}
            ></p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSwitchContainer;
