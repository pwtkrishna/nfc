import { Blog } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="blog-card">
      <Link href={`/blogs/${blog.slug}`}>
        {blog.coverImage && (
          <div className="w-full overflow-hidden rounded-md">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              height={500}
              width={500}
              className="w-full h-80 max-lg:h-full object-cover  transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <div className="py-4 ">
          <h2
            className="blog-title text-2xl mb-1.5 text-white hover:underline "
            style={{
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              lineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {blog.title}
          </h2>
        </div>
      </Link>
    </div>
  );
}
