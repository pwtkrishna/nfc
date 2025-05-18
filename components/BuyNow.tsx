import Button from "./Button";

const BuyNow = () => {
  return (
    <Button
      className="uppercase text-white"
      variant="solid"
      style={{
        minHeight: "calc(45px + 1px * 2)",
        minWidth: "calc(120px + 1px * 2)",
      }}
    >
      Buy Now
    </Button>
  );
};

export default BuyNow;
