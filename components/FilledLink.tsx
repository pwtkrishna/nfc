import Link from "next/link";

type Props = {
  href: string;
  children: string;
};

const FilledLink = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="rounded-[50px] text-base font-semibold leading-[19.2px] px-[22px] py-[12px] border border-[#04CEFA] bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)] inline-block"
    >
      {children}
    </Link>
  );
};

export default FilledLink;
