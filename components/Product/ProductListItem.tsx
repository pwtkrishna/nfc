import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.interface";

interface ProductListItemProps {
  product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <div key={product.id} className="all-collection-list">
      <Link href={`/all-collection/${product.slug}`}>
        <div>
          <Image
            src={product.image ? product.image : "/avatar.webp"}
            alt={product.name}
            height={500}
            width={500}
            className="w-full h-auto"
          />
        </div>
        <div className="min-h-[50px] bg-[#2B2E39] py-[18px] px-[12px]">
          <h2 className="product-title">{product.name}</h2>
          {product.sale_price ? (
            <p className="text-[22px] font-medium leading-[36.98px] text-left text-white">
              ${product.sale_price}
            </p>
          ) : (
            <p className="text-[22px] font-medium leading-[36.98px] text-left text-white">
              ${product.regular_price}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductListItem;
