import Button from "./Button";

type CartBtnProps = {
  className?: string;
};

const AddToCart = ({ className }: CartBtnProps) => {
  return (
    <Button
      variant="solid"
      style={{
        minHeight: "calc(45px + 1px * 2)",
        minWidth: "calc(120px + 1px * 2)",
      }}
      className={className}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
