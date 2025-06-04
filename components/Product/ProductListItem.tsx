import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.interface";

interface ProductListItemProps {
  product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <div key={product.id} className="all-collection-list">
      <Link
        href={`/all-collection/${product.slug}`}
        className="h-full inline-block w-full"
      >
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={product.card_image ? product.card_image : "/avatar.webp"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 250px"
          />
        </div>
        <div className="flex-1 min-h-[50px] bg-[#2B2E39] py-[18px] px-[12px] flex flex-col justify-between">
          <h2 className="product-title capitalize">{product.name}</h2>
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
