import Button from "../Button";

interface Props {
  packs?: string[];
  type?: string[];
  smartCard?: string[];
  selectedPack: string;
  selectedType: string;
  selectedSmartCard: string;
  onSelect: (
    variantType: "packs" | "type" | "smartCard",
    value: string
  ) => void;
}

const CardVariant: React.FC<Props> = ({
  packs,
  type,
  smartCard,
  selectedPack,
  selectedType,
  selectedSmartCard,
  onSelect,
}) => {
  const renderOptions = (
    label: string,
    options: string[],
    selected: string,
    variantType: "packs" | "type" | "smartCard"
  ) => {
    if (!options || options.length === 0) return null;

    return (
      <div className="flex flex-col my-[1.2rem]">
        <span className="text-[0.9rem] tracking-[0.04rem] text-[#ffffffbf]">
          {label}
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          {options.map((value, index) => (
            <Button
              key={index}
              variant="color"
              onClick={() => onSelect(variantType, value)}
              title={value}
              className={`capitalize ${
                selected === value ? "border-[#04cefa]" : "border-[#ffffff8c]"
              }`}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {renderOptions("Pack", packs ?? [], selectedPack, "packs")}
      {renderOptions("Type", type ?? [], selectedType, "type")}
      {renderOptions(
        "Smart Card",
        smartCard ?? [],
        selectedSmartCard,
        "smartCard"
      )}
    </>
  );
};

export default CardVariant;
