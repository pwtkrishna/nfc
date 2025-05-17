import Link from "next/link";

const FooterCopyRight = () => {
  return (
    <div className="border border-t-[#ffffff14] border-b-0">
      <div className="py-[15px] px-[20px] max-w-[1320px] w-full m-auto">
        <p className="text-[#808080] text-[12px] font-normal leading-[18px] uppercase tracking-[0.06rem]">
          &copy; 2025, NFC. All Rights reserved. Designed and developed by
          <Link href="https://premierwebtech.com">Premier Webtech</Link>
        </p>
      </div>
    </div>
  );
};

export default FooterCopyRight;
