import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.interface";

interface ProductListItemProps {
  product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <div key={product.id} className="all-collection-list">
      <Link href={`all-collection/${product.slug}`}>
        <div>
          <Image
            src={product.image}
            alt={product.title}
            height={500}
            width={500}
            className="w-ful h-auto"
          />
        </div>
        <div className="min-h-[50px] bg-[#2B2E39] py-[18px] px-[12px]">
          <h2 className="product-title">{product.title}</h2>
          {product.salePrice ? (
            <p className="text-[22px] font-medium leading-[36.98px] text-left text-white">
              Rs. {product.salePrice}
            </p>
          ) : (
            <p className="text-[22px] font-medium leading-[36.98px] text-left text-white">
              Rs. {product.regularPrice}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductListItem;
