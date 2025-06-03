"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAverageRating } from "@/utils/review-utils";
import { ProductProps } from "@/types/productProps";
import ReviewStar from "../ReviewStar";
import ProductPrice from "./ProductPrice";
import ProductTags from "./ProductTags";
import ColorSelector from "./ColorSelector";
import Quantity from "../Quantity";
import AddToCart from "../AddToCart";
import DeliveryEstimate from "./DeliveryEstimate";
import Coupoun from "../ui/Coupoun";
import CardVariant from "../ui/CardVariant";
import { useProductStore } from "@/store/productStore";
import { formatDateNow } from "@/utils/format-date";

type ProductDetailsProps = ProductProps & {
  selectedColor: string;
  onColorSelect: (color: string) => void;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  selectedColor,
  onColorSelect,
}) => {
  const disabled = product.quantity === 0 || product.in_stock === "No";

  const [selectedPack, setSelectedPack] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSmartCard, setSelectedSmartCard] = useState("");
  const [quantity, setQuantity] = useState(disabled ? 0 : 1);

  const { setCurrentProduct, setSelectedVariant, setMaxQuantity } =
    useProductStore();

  const presentDate = formatDateNow();

  const validCoupons =
    product.coupoun?.filter((c) => c.endDate > presentDate) ?? [];

  useEffect(() => {
    setCurrentProduct(product);
  }, [product, setCurrentProduct]);

  useEffect(() => {
    const variant = {
      selectedColor,
      selectedPack,
      selectedType,
      selectedSmartCard,
    };
    setSelectedVariant(variant);

    const defaultStock = product.quantity ?? 10;
    setMaxQuantity(defaultStock);
  }, [
    selectedColor,
    selectedPack,
    selectedType,
    selectedSmartCard,
    setSelectedVariant,
    product.quantity,
    setMaxQuantity,
  ]);

  return (
    <div className="product-info-wrapper pl-[3rem] max-[729px]:pl-[0]">
      <div className="block lg:sticky lg:top-[3rem]">
        <h2 className="text-white text-[42px] font-semibold leading-[50.4px] text-left mb-[1.1rem]">
          {product.name}
        </h2>
        <div className="flex items-center gap-[8px] mt-[16px] mb-[10px]">
          <ReviewStar rating={getAverageRating(product.reviews)} />
          <p className="text-[14px] font-medium leading-[20px] text-left text-[#d9d9d9]">
            Based on 11,000+ reviews from
          </p>
          <div className="flex items-center gap-[8px]">
            <Image
              src="/reviews/google.png"
              alt="Google reviews"
              height={17}
              width={40}
            />
            <Image
              src="/reviews/app-store.png"
              alt="App Store"
              height={17}
              width={16}
            />
          </div>
        </div>
        <ProductPrice product={product} />
        <div
          className="text-white text-[18px] font-normal tracking-wide"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />

        <ProductTags tags={product.tags} />
        {disabled ? (
          <div className="text-red-500 text-3xl font-semibold mt-2">
            Out of Stock
          </div>
        ) : (
          <>
            {Array.isArray(product.colors) &&
              product.colors.filter((c) => c && c.trim() !== "").length > 0 && (
                <ColorSelector
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onColorSelect={onColorSelect}
                />
              )}

            {((Array.isArray(product.packs) &&
              product.packs.length > 0 &&
              product.packs.some((p) => p && p !== "")) ||
              (Array.isArray(product.type) &&
                product.type.length > 0 &&
                product.type.some((t) => t && t !== "")) ||
              (Array.isArray(product.smart_cards) &&
                product.smart_cards.length > 0 &&
                product.smart_cards.some((s) => s && s !== ""))) && (
              <CardVariant
                packs={product.packs ?? []}
                type={product.type ?? []}
                smartCard={product.smart_cards ?? []}
                selectedPack={selectedPack}
                selectedType={selectedType}
                selectedSmartCard={selectedSmartCard}
                onSelect={(variant, value) => {
                  if (variant === "packs") setSelectedPack(value);
                  else if (variant === "type") setSelectedType(value);
                  else if (variant === "smartCard") setSelectedSmartCard(value);
                }}
              />
            )}

            <Quantity
              productId={product.id}
              onQuantityChange={(product.id, setQuantity)}
            />
            <div className="flex max-w-full gap-[16px] mb-6">
              <AddToCart
                product={product}
                selectedColor={selectedColor}
                selectedPack={selectedPack}
                selectedType={selectedType}
                selectedSmartCard={selectedSmartCard}
                quantity={quantity}
              />
              <div className="w-[50%]"></div>
            </div>
          </>
        )}
        <DeliveryEstimate />
        {product.is_customizable && (
          <div className="my-[24px] rounded-[20px] bg-[#2B2E39] p-[20px]">
            <h3 className="text-[20px] font-medium leading-[24px] text-center text-white">
              How do I customise/design my card?
            </h3>
            <p className="text-base font-normal leading-[20px] text-center max-w-[415px] w-full my-[24px] mx-auto text-[#ffffff80]">
              Once you place your order, our designer will contact you within 24
              hours to collect your details (your logo, name, designation, etc.)
              and share design of your custom card for your approval.
            </p>
          </div>
        )}
        {validCoupons?.length > 0 && product.coupoun && (
          <Coupoun coupoun={product.coupoun} />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
