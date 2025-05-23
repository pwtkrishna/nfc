import { Product } from "@/types/product.interface";

type ProductTagProps = {
  tags: Product["tags"];
};

const ProductTags = ({ tags }: ProductTagProps) => {
  if (!Array.isArray(tags) || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center">
      {tags.map((tag, index) => (
        <span
          key={tag.id}
          className="text-white text-[14px] font-medium capitalize"
        >
          {`✅${tag.name}`}
          {index < tags.length - 1 && " | "}
        </span>
      ))}
    </div>
  );
};

export default ProductTags;
