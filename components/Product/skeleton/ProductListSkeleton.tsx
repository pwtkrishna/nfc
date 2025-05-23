const ProductListSkeleton = () => {
  return (
    <div className="allCollection-list-wrapp">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="all-collection-list animate-pulse bg-[#23262f] rounded-lg overflow-hidden"
        >
          <div className="w-full h-[250px] bg-[#353842]" />
          <div className="min-h-[50px] bg-[#2B2E39] py-[18px] px-[12px]">
            <div className="h-6 bg-[#353842] rounded w-2/3 mb-2" />
            <div className="h-4 bg-[#353842] rounded w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListSkeleton;
