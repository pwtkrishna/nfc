import Button from "./Button";
import Input from "./Input";
import { useProductStore } from "@/store/productStore";

interface QuantityProps {
  quantity: number;
  productId: number;
  maxQuantity?: number;
  allowZero?: boolean;
  onQuantityChange: (
    productId: number,
    quantity: number,
    newQuantity?: number
  ) => void;
}

const Quantity: React.FC<QuantityProps> = ({
  onQuantityChange,
  productId,
  allowZero = false,
  quantity = 1,
}) => {
  const maxQuantity = useProductStore((state) => state.maxQuantity);

  // useEffect(() => {
  //   onQuantityChange(quantity);
  // }, [quantity, onQuantityChange]);

  const handleIncrement = () => {
    const inc = maxQuantity
      ? Math.min(quantity + 1, maxQuantity)
      : quantity + 1;

    onQuantityChange(productId, inc);
  };

  const handleDecrement = () => {
    const min = allowZero ? 0 : 1;
    const dec = quantity > min ? quantity - 1 : min;

    onQuantityChange(productId, dec);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = allowZero ? 0 : 1;
    if (maxQuantity && value > maxQuantity) value = maxQuantity;
    if (!allowZero && value < 1) value = 1;
    if (allowZero && value < 0) value = 0;

    onQuantityChange(productId, value);
  };

  return (
    <div className="flex flex-col max-w-[400px] my-[15px]">
      <div>
        <span className="text-[0.9rem] tracking-[0.04rem] text-[#ffffffbf] mb-[6px] inline-block">
          Quantity
        </span>
      </div>
      <div
        className="flex items-center border border-[#04cefa] rounded-[65px] w-[160px] text-white relative"
        style={{ minHeight: "calc((1px * 2) + 45px)" }}
      >
        <Button
          type="button"
          variant="none"
          className={`shrink-0 text-[18px] flex items-center justify-center ${
            quantity === (allowZero ? 0 : 1)
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={handleDecrement}
          style={{ width: "45px" }}
          aria-label="Decrease quantity"
          title="Decrease quantity"
        >
          <span className="text-[#A1DBEA] w-[10px] h-[20px] flex items-center justify-center">
            {/* minus icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="icon icon-minus h-full w-full"
              viewBox="0 0 10 2"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 1 1 0 1H1A.5.5 0 0 1 .5 1"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Button>

        <Input
          type="number"
          value={quantity}
          onChange={handleChange}
          min={allowZero ? 0 : 1}
          max={maxQuantity}
          className="text-white text-[16px] font-medium opacity-[0.85] text-center px-[5px] w-full shrink grow basis-0 appearance-none bg-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />

        <Button
          type="button"
          variant="none"
          onClick={handleIncrement}
          className={`shrink-0 text-[18px] flex items-center justify-center ${
            maxQuantity && quantity >= maxQuantity
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={!!maxQuantity && quantity >= maxQuantity}
          style={{ width: "45px" }}
          aria-label="Increase quantity"
          title="Increase quantity"
        >
          <span className="text-[#A1DBEA] w-[10px] h-[20px] flex items-center justify-center">
            {/* plus icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-full w-full"
              viewBox="0 0 10 10"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1 4.51a.5.5 0 0 0 0 1h3.5l.01 3.5a.5.5 0 0 0 1-.01V5.5l3.5-.01a.5.5 0 0 0-.01-1H5.5L5.49.99a.5.5 0 0 0-1 .01v3.5l-3.5.01z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
