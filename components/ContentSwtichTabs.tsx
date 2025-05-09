import { teamContentSwtichData } from "@/data/teamContentSwitchData";
import ContentSwitchTabItem from "./ContentSwitchTabItem";

type ContentSwitchTabTypes = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const ContentSwtichTabs = ({
  activeIndex,
  setActiveIndex,
}: ContentSwitchTabTypes) => {
  return (
    <ul className="flex items-center gap-[2px] justify-between flex-wrap bg-[#2B2E39] rounded-[40px] max-w-[895px] w-full m-auto">
      {teamContentSwtichData.map((item, index) => (
        <ContentSwitchTabItem
          key={index}
          activeIndex={activeIndex}
          item={item}
          index={index}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </ul>
  );
};

export default ContentSwtichTabs;
