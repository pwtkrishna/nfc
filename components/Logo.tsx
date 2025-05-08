import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/taponn-digital.webp"
        width={100}
        height={100}
        className="h-auto w-[100%]"
        alt="NFC"
        priority
      />
    </Link>
  );
};

export default Logo;
