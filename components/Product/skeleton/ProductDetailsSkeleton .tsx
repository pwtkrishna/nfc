const ProductDetailsSkeleton = () => (
  <div className="product-info-wrapper pl-[3rem] max-[729px]:pl-[0]">
    <div className="block lg:sticky lg:top-[3rem]">
      {/* Title */}
      <div className="h-[50px] w-2/3 bg-gray-800 animate-pulse rounded mb-4" />
      {/* Stars and reviews */}
      <div className="flex gap-2 items-center mb-4">
        <div className="h-6 w-24 bg-gray-800 animate-pulse rounded" />
        <div className="h-4 w-32 bg-gray-800 animate-pulse rounded" />
      </div>
      {/* Price */}
      <div className="h-8 w-32 bg-gray-800 animate-pulse rounded mb-4" />
      {/* Description */}
      <div className="h-5 w-full bg-gray-800 animate-pulse rounded mb-2" />
      <div className="h-5 w-5/6 bg-gray-800 animate-pulse rounded mb-2" />
      <div className="h-5 w-2/3 bg-gray-800 animate-pulse rounded mb-4" />
      {/* Color Selector */}
      <div className="h-8 w-1/2 bg-gray-800 animate-pulse rounded mb-4" />
      {/* Variant Selector */}
      <div className="h-8 w-1/2 bg-gray-800 animate-pulse rounded mb-4" />
      {/* Quantity & Add to Cart */}
      <div className="flex gap-4 mb-4">
        <div className="h-10 w-32 bg-gray-800 animate-pulse rounded" />
        <div className="h-10 w-32 bg-gray-800 animate-pulse rounded" />
      </div>
      {/* Delivery Estimate */}
      <div className="h-6 w-1/3 bg-gray-800 animate-pulse rounded mb-4" />
    </div>
  </div>
);

export default ProductDetailsSkeleton;
