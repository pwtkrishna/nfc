import Link from "next/link";

const FooterPolicy = () => {
  return (
    <div className="pl-[70px] max-[800px]:pl-0 max-[800px]:w-[250px] max-w-[250px] max-[542px]:w-[50%] max-[466px]:w-full">
      <h2 className="text-[24px] font-semibold leading-[30px] text-white mb-[14px]">
        Policy
      </h2>
      <ul className="flex flex-col">
        <li>
          <Link
            href="/policies/returns-refunds"
            className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
          >
            Returns Refunds
          </Link>
        </li>
        <li>
          <Link
            href="/policies/shipping-policy"
            className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
          >
            Shipping Policy
          </Link>
        </li>
        <li>
          <Link
            href="/policies/terms-conditions"
            className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
          >
            Terms Conditions
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
          >
            Compatibilty
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterPolicy;
