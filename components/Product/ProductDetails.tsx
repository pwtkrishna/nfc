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
// import BuyNow from "../BuyNow";
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
  const [selectedPack, setSelectedPack] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSmartCard, setSelectedSmartCard] = useState("");
  const [quantity, setQuantity] = useState(1);

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
          {product.title}
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
        <p className="text-white text-[18px] font-normal tracking-wide">
          <strong>{product.description}</strong>
        </p>
        <ProductTags tags={product.tags} />
        {product.colors && (
          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            onColorSelect={onColorSelect}
          />
        )}
        <CardVariant
          packs={product.packs ?? []}
          type={product.type ?? []}
          smartCard={product.smartCards ?? []}
          selectedPack={selectedPack}
          selectedType={selectedType}
          selectedSmartCard={selectedSmartCard}
          onSelect={(variant, value) => {
            if (variant === "packs") setSelectedPack(value);
            else if (variant === "type") setSelectedType(value);
            else if (variant === "smartCard") setSelectedSmartCard(value);
          }}
        />
        <Quantity onQuantityChange={setQuantity} />
        {/* Pass callback to update quantity */}
        <div className="flex max-w-full gap-[16px] mb-6">
          <AddToCart
            product={product}
            selectedColor={selectedColor}
            selectedPack={selectedPack}
            selectedType={selectedType}
            selectedSmartCard={selectedSmartCard}
            quantity={quantity}
          />
          {/* <BuyNow /> */}
          <div className="w-[50%]"></div>
        </div>
        <DeliveryEstimate />
        {product.isCustomizable && (
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
