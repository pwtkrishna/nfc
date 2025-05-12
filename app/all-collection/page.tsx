import ProductList from "@/components/Product/ProductList";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <div>
        <Image
          src="/product_banner.webp"
          alt="Product banner"
          height={500}
          width={500}
          className="w-full"
        />
      </div>
      <div className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
        <ProductList />
      </div>
    </section>
  );
};

export default page;
