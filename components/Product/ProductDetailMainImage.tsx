import { ProductImageGalleryType } from "@/types/productProps";
import Image from "next/image";

type Props = {
  media: ProductImageGalleryType;
  title: string;
};

const ProductDetailMainImage = ({ media, title }: Props) => {
  return (
    <div className="overflow-hidden rounded-[12px]">
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={title}
          height={500}
          width={500}
          className="w-full h-auto object-contain"
        />
      ) : (
        <video
          src={media.src}
          controls
          className="w-full h-auto object-contain rounded-[12px]"
        />
      )}
    </div>
  );
};

export default ProductDetailMainImage;
