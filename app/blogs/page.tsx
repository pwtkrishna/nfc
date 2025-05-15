import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getPaginatedBlogs } from "@/lib/blogService";

export default function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const pageSize = 6;

  const { data, total } = getPaginatedBlogs(page, pageSize);

  return (
    <section className="max-w-[1320px] w-full px-5 m-auto">
      <div className="">
        <h1 className="my-5 text-4xl text-white">Blogs</h1>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
          {data.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <Pagination current={page} total={total} pageSize={pageSize} />
      </div>
    </section>
  );
}
