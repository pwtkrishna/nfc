import ProductDetailMainImage from "./ProductDetailMainImage";
import { ProductProps } from "@/types/productProps";
import ProductImageGallery from "./ProductImageGallery";

const ProductDetailsImage = ({ product }: ProductProps) => {
  return (
    <div className=" product-image-wrapper">
      <div className="block sticky top-[3rem]">
        <ProductDetailMainImage product={product} />
        <ProductImageGallery product={product} />
      </div>
    </div>
  );
};

export default ProductDetailsImage;
