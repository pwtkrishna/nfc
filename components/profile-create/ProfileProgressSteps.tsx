import { StepsType } from "@/types/profile-steps";

interface ProfileProgressStepsProps {
  steps: StepsType;
  step: number;
}

const ProfileProgressSteps = ({ steps, step }: ProfileProgressStepsProps) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center max-w-3xl mx-auto">
        {steps.map((stepItem, index) => (
          <div key={stepItem.number} className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                step >= stepItem.number
                  ? "bg-[rgba(4,206,250,0.2)] border-2 border-[rgb(4,206,250)] text-[rgb(4,206,250)]"
                  : "bg-[#282a33] border-2 border-gray-600 text-gray-400"
              }`}
            >
              <stepItem.icon className="h-5 w-5" />
            </div>
            <span
              className={`text-xs font-medium ${
                step >= stepItem.number
                  ? "text-[rgb(4,206,250)]"
                  : "text-gray-400"
              }`}
            >
              {stepItem.title}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`w-16 h-1 mt-2 ${
                  step > stepItem.number ? "bg-[rgb(4,206,250)]" : "bg-gray-600"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileProgressSteps;
