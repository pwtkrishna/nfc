// app/components/BestSeller.tsx
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

async function getCategories(): Promise<Category[]> {
  const res = await fetch(
    "https://nfc.aardana.com/api/nfc-product-categories",
    {
      cache: "no-store", // or "force-cache" if you want caching
    }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data.data) ? data.data : [];
}

const BestSeller = async () => {
  const categories = await getCategories();

  return (
    <section>
      <div className="container flex flex-col items-center justify-between max-w-[1320px] w-full m-auto py-[35px] px-[20px] overflow-hidden">
        <div className="bestseller-text-container flex flex-col items-center justify-between w-full">
          <span className="text-center uppercase text-[#A1DBEA] text-[18px] font-normal leading-[24px]">
            Bestsellers
          </span>
          <h2 className="text-[42px] font-semibold leading-[50.4px] capitalize my-1.5 text-center text-white">
            Our Smart Product
          </h2>
          <p className="text-[20px] text-[#9E9FA7] font-normal leading-[24px]">
            Smart, Custom-Designed NFC Products for Instant Sharing
          </p>
        </div>
        <div
          className="bestseller-cards-container w-full flex pt-[20px] mr-[-20px] max-md:flex-wrap max-md:gap-y-[10px]"
          style={{ overflow: "overlay" }}
        >
          {categories.length === 0 && (
            <span className="text-white">No categories found.</span>
          )}
          {categories.map((cat) => (
            <Link
              href={`/all-collection#${cat.slug}`}
              key={cat.id}
              className="smart-product-link basis-[300px] shrink-0 grow-0 rounded-[20px] mx-[10px] relative overflow-hidden"
            >
              <span className="absolute text-white text-[20px] font-semibold leading-[24px] text-center pb-1.5 w-full top-[20px] max-[425px]:text-[16px]">
                {cat.name}
              </span>
              <Image
                src={cat.icon}
                alt={cat.name}
                height={500}
                width={500}
                className="w-full h-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
