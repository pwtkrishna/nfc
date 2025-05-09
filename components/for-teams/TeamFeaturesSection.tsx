"use client";

import { useState } from "react";
import { teamContentSwtichData } from "@/data/teamContentSwitchData";
import ContentSwitchContainer from "../ContentSwitchContainer";
import ContentSwtichTabs from "../ContentSwtichTabs";

const TeamFeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = teamContentSwtichData[activeIndex];
  return (
    <section>
      <div className="max-w-[1320px] w-full m-auto px-[20px] py-[35px]">
        <div className="flex items-center flex-col pb-[30px]">
          <span className="text-[#A1DBEA] uppercase text-[18px] font-normal text-center leading-[24px]">
            Designed for teams
          </span>
          <h2 className="text-white text-[42px] font-semibold max-lg:leading-[50.4px] my-[6px] text-center max-lg:text-[38px] max-md:text-[32px] max-md:leading-[42px] leading-[72px] ">
            Seamless onboarding and scale effortlessly
          </h2>
        </div>
        <div>
          {/* TABS */}
          <ContentSwtichTabs
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

          {/* CONTENT */}
          <ContentSwitchContainer activeData={activeData} />
        </div>
      </div>
    </section>
  );
};

export default TeamFeaturesSection;
