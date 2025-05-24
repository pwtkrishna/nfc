import { ProductImageGalleryType } from "@/types/productProps";
import Image from "next/image";

type Props = {
  media: ProductImageGalleryType;
  title: string;
};

const ProductDetailMainImage = ({ media, title }: Props) => {
  return (
    <div className="overflow-hidden rounded-[12px]">
      {media?.type === "image" ? (
        <Image
          // key={media.image}
          src={media.image || "/avatar.webp"}
          alt={title}
          height={500}
          width={500}
          className="w-full h-auto object-contain"
        />
      ) : (
        <video
          // key={media.image}
          src={media?.image ? media.image : "/avatar.webp"}
          controls
          className="w-full h-auto object-contain rounded-[12px]"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default ProductDetailMainImage;
