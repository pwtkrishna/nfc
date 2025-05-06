import Image from "next/image";
import logo from "@/data/taponn-digital.webp";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={100}
        height={100}
        className="h-auto w-[100px]"
        alt="NFC"
        priority
      />
    </Link>
  );
};

export default Logo;
