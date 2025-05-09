import Link from "next/link";

type Props = {
  href: string;
  children: string;
};

const LightLink = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      style={{ marginLeft: "6px" }}
      className="rounded-[50px] text-base font-semibold leading-[19.2px] px-[22px] py-[12px] text-[#04CEFA] hover:text-black border border-[#04CEFA] hover:bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)] transition duration-[0.3s] inline-block"
    >
      {children}
    </Link>
  );
};

export default LightLink;
