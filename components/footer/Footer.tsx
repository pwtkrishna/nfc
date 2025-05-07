import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="py-[36px]">
      <div className="max-w-[1320px] m-auto px-[20]">
        <div className="grid grid-cols-4">
          <div>
            <div>
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
