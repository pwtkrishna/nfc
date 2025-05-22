import Logo from "../Logo";
import FooterDescription from "./FooterDescription";
import SocialLinks from "./SocialLinks";
// import FooterShop from "./FooterShop";
import FooterPolicy from "./FooterPolicy";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <footer className="pt-[36px] border-t border-t-[#ffffff14]">
      <div className="max-w-[1320px] w-full m-auto px-[20px] pb-[20px]">
        <div className="flex flex-wrap justify-start max-[800px]:justify-between max-[800px]:gap-y-[3rem]">
          <div className="max-w-[377px]">
            <div className="mb-[2rem] w-[6rem] max-md:w-[4rem]">
              <Logo />
            </div>
            <FooterDescription />
            <SocialLinks />
          </div>
          {/* <FooterShop /> */}
          <FooterPolicy />
        </div>
      </div>
      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
