import Image from "next/image";

const page = () => {
  return (
    <section className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
      <div className="flex items-center justify-between gap-10 ">
        <div className="max-w-[540px] w-full flex-[1]">
          <h2 className="text-[#05cefa] text-3xl font-medium leading-8">
            About Us
          </h2>
          <p className="text-lg leading-6 pt-6 text-[#ffffffbf]">
            Three millennial founders are on a mission to solve all your
            networking challenges with our innovative smart solutions. The
            creation of TapOnn aligns with users seamless growth in their
            networking journey, and this has been our driving force in building
            TapOnn.
            <br />
            <br />
            We are dedicated to crafting intelligent solutions with the finest
            tools to ensure your next move is effortless, creating more
            opportunities for all. we&apos;ve ensured there&apos;s something for
            everyone seeking greater growth, networks, and opportunities. We
            believe in growing with you & hence continously thrive to upgrade
            our technology & tools to grow together. Download the TapOnn app and
            find all of us in your connections.
          </p>
        </div>
        <div className="flex-[1] max-w-[50%]">
          <Image
            src="/taponn-digital.webp"
            alt="NFC"
            width={500}
            height={500}
            className="w-full h-auto rounded-[8px]"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
