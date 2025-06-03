// import { getProductsByAverageReviewRating } from "@/utils/review-utils";
// import Link from "next/link";

const FooterShop = async () => {
  // let ratedProducts: Awaited<
  //   ReturnType<typeof getProductsByAverageReviewRating>
  // > = [];
  // try {
  //   // Fetch and slice the top 6 rated products
  //   ratedProducts = (await getProductsByAverageReviewRating(3.2)).slice(0, 6);
  // } catch (error) {
  //   // Optionally log error for debugging
  //   console.error("Failed to load rated products:", error);
  // }

  return (
    <div className="pl-[70px] max-w-[250px] max-[666px]:pl-0 max-[800px]:w-[250px] max-[542px]:w-[50%] max-[466px]:w-full">
      <h2 className="text-[24px] font-semibold leading-[30px] text-white mb-[14px]">
        Shop
      </h2>
      <ul className="flex flex-col">
        {/* {ratedProducts.length > 0 ? (
          ratedProducts.map((product) => (
            <li key={product.id}>
              <Link
                href={`/all-collection/${product.slug}`}
                className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
              >
                {product.name}
              </Link>
            </li>
          ))
        ) : (
          <li>
            <span className="text-[14px] text-[#808080]">
              No top-rated products found.
            </span>
          </li>
        )} */}
      </ul>
    </div>
  );
};

export default FooterShop;
