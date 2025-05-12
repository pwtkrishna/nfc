import { Product } from "@/types/product.interface";

type ProductPriceProps = {
  product: Product;
};

const ProductPrice = ({ product }: ProductPriceProps) => {
  return (
    <div className="flex items-center my-[0.8rem]">
      {product.salePrice ? (
        <>
          <span className="text-white font-medium leading-[24px] text-left text-[28px] mr-[15px]">
            Rs. {product.salePrice}
          </span>
          <span
            className="text-[20px] text-[#ffffffbf] mr-[15px] line-through"
            style={{ textDecorationThickness: "1px" }}
          >
            Rs. {product.regularPrice}
          </span>
        </>
      ) : (
        <span className="text-white font-medium leading-[24px] text-left text-[28px] mr-[15px]">
          Rs. {product.regularPrice}
        </span>
      )}
    </div>
  );
};

export default ProductPrice;
