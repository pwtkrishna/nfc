import { TeamContentType } from "@/data/teamContentSwitchData";

type ItemsType = {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  item: TeamContentType;
};

const ContentSwitchTabItem = ({
  index,
  activeIndex,
  setActiveIndex,
  item,
}: ItemsType) => {
  return (
    <li
      className={`team-custom-tab text-white cursor-pointer max-[375px]:text-sm max-[375px]:py-[4px] max-[375px]:px-[10px] wrap-break-word ${
        activeIndex === index ? "team-active-tab" : ""
      }`}
      onClick={() => setActiveIndex(index)}
    >
      {item.title}
    </li>
  );
};

export default ContentSwitchTabItem;
