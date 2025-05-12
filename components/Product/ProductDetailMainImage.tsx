import { ProductProps } from "@/types/productProps";
import Image from "next/image";

const ProductDetailMainImage = ({ product }: ProductProps) => {
  return (
    <div className="overflow-hidden rounded-[12px]">
      <Image
        src={product.image}
        alt={product.title}
        height={500}
        width={500}
        className="w-full h-auto"
      />
    </div>
  );
};

export default ProductDetailMainImage;
