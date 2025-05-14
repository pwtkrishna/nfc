import { ReviewsProps } from "@/types/productProps";
import ReviewStar from "./ReviewStar";
import Image from "next/image";

const Testimonials = ({ reviews }: ReviewsProps) => {
  return (
    <section className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
      <div className="">
        <h3 className="uppercase text-[18px] font-normal leading-[24px] text-[#A1DBEA]">
          TESTIMONIALS
        </h3>
        <h2 className="text-[42px] font-semibold leading-[50.4px] text-white my-[6px]">
          We Let Users Talk!
        </h2>
        <p className="text-left text-[20px] font-normal leading-[24px] text-[#9E9FA7] ">
          Check out how TapOnn has made networking a breeze for our users.
        </p>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[18px] pt-[50px]">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="pt-[25px] px-[20px] pb-[15px] rounded-[8px] mb-[6px] bg-[#2B2E39]"
          >
            <div>
              <ReviewStar rating={review.rating} />
            </div>
            <div className="pb-[32px]">
              <p className="text-lg font-normal leading-[27px] text-left text-[#9E9FA7]">
                {review.comment}
              </p>
            </div>
            <div className="flex items-center gap-[20px]">
              <Image
                src={review.avatar ? review.avatar : "/avatar.webp"}
                alt={review.user}
                width={56}
                height={56}
                className="w-[56px] h-[56px] rounded-full"
              />
              <div>
                <p className="text-lg font-medium leading-[27px] text-[#05cefa]">
                  {review.user}
                </p>
                {review.designation && (
                  <p className="text-base font-light leading-[24px] text-white">
                    {review.designation}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
