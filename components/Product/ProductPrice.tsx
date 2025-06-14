import { Product } from "@/types/product.interface";

type ProductPriceProps = {
  product: Product;
};

const ProductPrice = ({ product }: ProductPriceProps) => {
  return (
    <div className="flex items-center my-[0.8rem]">
      {product.sale_price ? (
        <>
          {product.sale_price !== 0 && (
            <span className="text-white font-medium leading-[24px] text-left text-[28px] mr-[15px]">
              ${product.sale_price}
            </span>
          )}
          {product.regular_price !== 0 && (
            <span
              className="text-[20px] text-[#ffffffbf] mr-[15px] line-through"
              style={{ textDecorationThickness: "1px" }}
            >
              ${product.regular_price}
            </span>
          )}
        </>
      ) : (
        product.regular_price !== 0 && (
          <span className="text-white font-medium leading-[24px] text-left text-[28px] mr-[15px]">
            ${product.regular_price}
          </span>
        )
      )}
    </div>
  );
};

export default ProductPrice;
