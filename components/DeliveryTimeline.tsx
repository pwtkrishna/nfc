import React from "react";

type DeliveryStep = {
  label: string;
  date: Date | [Date, Date]; // single or range
  Icon: React.FC;
};

type DeliveryTimelineProps = {
  steps: DeliveryStep[];
};

const formatDate = (date: Date): string =>
  date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

const formatDateRange = (date: Date | [Date, Date]): string => {
  if (Array.isArray(date)) {
    return `${formatDate(date[0])} - ${formatDate(date[1])}`;
  }
  return formatDate(date);
};

const DeliveryTimeline: React.FC<DeliveryTimelineProps> = ({ steps }) => {
  return (
    <div className="mt-[8px] mb-[24px]">
      <div className="flex leading-[1.14em] rounded-[12px] border border-[#9E9FA759] text-sm w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex grow shrink-0 basis-auto flex-col items-center py-[10px] px-[4px] text-[#000000de] w-[33.33%] ${
              index < steps.length - 1
                ? "border border-y-0 border-l-0 border-r-[#9E9FA759] delivery-estimate-box"
                : ""
            }`}
          >
            <step.Icon />
            <div className="mt-[4px] text-center">
              <span className="font-medium leading-[18px] text-base text-white">
                {step.label}
              </span>
              <p className="text-base font-normal leading-[30px] text-[#ffffff94] text-center">
                {formatDateRange(step.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryTimeline;
