import { Product } from "@/types/product.interface";

type ProductTagProps = {
  tags: Product["tags"];
};

const ProductTags = ({ tags }: ProductTagProps) => {
  return (
    <div className="flex flex-wrap items-center">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="text-white text-[14px] font-medium capitalize"
        >
          {`✅${tag} |`}
          {index === tags.length - 1 && `✅${tag}`}
        </span>
      ))}
    </div>
  );
};

export default ProductTags;
