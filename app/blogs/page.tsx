import BlogCard from "@/components/BlogCard";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Pagination from "@/components/Pagination";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { getPaginatedBlogs } from "@/lib/blogService";
import { Toaster } from "react-hot-toast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ searchParams }: any) {
  const pageParam = searchParams?.page;
  const page = Array.isArray(pageParam)
    ? parseInt(pageParam[0] || "1", 10)
    : parseInt(pageParam || "1", 10);

  const pageSize = 6;
  const { data, total } = await getPaginatedBlogs(page, pageSize);

  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <section className="max-w-[1320px] w-full px-5 m-auto">
        <div>
          <h1 className="my-5 text-4xl text-white">Blogs</h1>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
            {data.map((blog) => (
              <BlogCard key={blog.id} blogs={blog} />
            ))}
          </div>
          <Pagination current={page} total={total} pageSize={pageSize} />
        </div>
      </section>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
