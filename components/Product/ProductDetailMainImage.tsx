import { ProductImageGalleryType } from "@/types/productProps";
import Image from "next/image";

type Props = {
  media?: ProductImageGalleryType;
  title: string;
};

const ProductDetailMainImage = ({ media, title }: Props) => {
  // Determine if we have a valid image or video source
  const hasMedia = media && media.image;

  if (!hasMedia) {
    // Fallback: show avatar image if nothing is there
    return (
      <div className="overflow-hidden rounded-[12px]">
        <Image
          src="/avatar.webp"
          alt={title}
          height={500}
          width={500}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[12px]">
      {media.type === "image" ? (
        <Image
          src={media.image}
          alt={title}
          height={500}
          width={500}
          className="w-full h-auto object-contain"
        />
      ) : (
        <video
          src={media.image}
          controls
          className="w-full h-auto object-contain rounded-[12px]"
        >
          Your browser does not support the video.
        </video>
      )}
    </div>
  );
};

export default ProductDetailMainImage;
