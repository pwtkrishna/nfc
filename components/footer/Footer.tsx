import Link from "next/link";
import Logo from "../Logo";
import FooterDescription from "./FooterDescription";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="pt-[36px] border-0">
      <div className="max-w-[1320px] w-full m-auto px-[20px] pb-[20px]">
        <div className="flex flex-wrap justify-start max-[800px]:justify-between max-[800px]:gap-y-[3rem]">
          <div className="max-w-[377px]">
            <div className="mb-[2rem] w-[6rem] max-md:w-[4rem]">
              <Logo />
            </div>
            <FooterDescription />
            <SocialLinks />
          </div>
          <div className="pl-[70px] max-w-[250px] max-[666px]:pl-0 max-[800px]:w-[250px] max-[542px]:w-[50%] max-[466px]:w-full">
            <h2 className="text-[24px] font-semibold leading-[30px] text-white mb-[14px]">
              Shop
            </h2>
            <ul className="flex flex-col">
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Fully Customise Card
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Premium Smart Cards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Standees and Review cards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Bundle
                </a>
              </li>
            </ul>
          </div>
          <div className="pl-[70px] max-[800px]:pl-0 max-[800px]:w-[250px] max-w-[250px] max-[542px]:w-[50%] max-[466px]:w-full">
            <h2 className="text-[24px] font-semibold leading-[30px] text-white mb-[14px]">
              Policy
            </h2>
            <ul className="flex flex-col">
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Compatibilty
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] font-normal leading-[22px] text-left text-[#808080] hover:text-[#04cefa] transition ease-in-out duration-300 inline-block pb-[0.5rem]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border border-t-[#ffffff14] border-b-0">
        <div className="py-[15px] px-[20px] max-w-[1320px] w-full m-auto">
          <p className="text-[#808080] text-[12px] font-normal leading-[18px] uppercase tracking-[0.06rem]">
            &copy; 2025, NFC. All Rights reserved. Designed and developed by{" "}
            <Link href="https://premierwebtech.com">Premier Webtech</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
