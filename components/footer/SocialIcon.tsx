import Link from "next/link";
import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  children: ReactNode;
}

const SocialIcon = ({ href, children }: SocialIconProps) => {
  return (
    <li>
      <Link href={href} className="p-[1.1rem] flex items-center justify-center">
        <span className="h-5 w-5 inline-block text-[#A1DBEA] hover:text-[#04CEFA] hover:scale-[1.07] transition duration-300 ease-in-out">
          {children}
        </span>
      </Link>
    </li>
  );
};

export default SocialIcon;
