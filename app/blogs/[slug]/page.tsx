import { getBlogBySlug, getRelatedBlogs } from "@/lib/blogService";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CalendarIcon,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);
  const relatedBlogs = getRelatedBlogs(params.slug);

  if (!blog) return notFound();

  // Mock data for enhanced UI
  const publishDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const readingTime = `${Math.max(
    5,
    Math.ceil(blog.content.length / 1000)
  )} min read`;
  const author = {
    name: "John Doe",
    avatar: "/avatar.webp?height=100&width=100",
    bio: "Content Writer & Digital Strategist",
  };

  return (
    <section className="max-w-[1320px] px-4 py-12 mx-auto text-white">
      <div className="">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm">
          <Link href="/" className="text-[rgb(4,206,250)] hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/blogs" className="text-[rgb(4,206,250)] hover:underline">
            Blog
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-400">{blog.title}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-300">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{readingTime}</span>
          </div>
        </div>

        {/* Main image with gradient overlay */}
        {blog.mainImage && (
          <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2128] to-transparent opacity-40 z-10"></div>
            <Image
              src={blog.mainImage || "/avatar.webp"}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

        {/* Author info */}
        <div className="flex items-center mb-10 p-6 rounded-lg bg-[#282a33] border-l-4 border-[rgb(4,206,250)]">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src={author.avatar || "/avatar.webp"}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">{author.name}</h3>
            <p className="text-gray-300 text-sm">{author.bio}</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-10">
          <p className="text-xl leading-relaxed mb-8">{blog.content}</p>
        </div>

        {/* Videos */}
        {Array.isArray(blog.videos) && blog.videos.length > 0 && (
          <div className="space-y-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 border-b border-[rgb(4,206,250)] pb-2 inline-block">
              Related Videos
            </h2>
            {blog.videos.map((video, index) => (
              <div
                key={index}
                className="aspect-video rounded-xl overflow-hidden shadow-lg shadow-[rgba(4,206,250,0.15)]"
              >
                <iframe
                  src={video}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {/* Social sharing */}
        <div className="mt-12 mb-16">
          <h3 className="text-xl font-semibold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <button className="p-3 bg-[#282a33] rounded-full hover:bg-[rgb(4,206,250)] transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="p-3 bg-[#282a33] rounded-full hover:bg-[rgb(4,206,250)] transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="p-3 bg-[#282a33] rounded-full hover:bg-[rgb(4,206,250)] transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="p-3 bg-[#282a33] rounded-full hover:bg-[rgb(4,206,250)] transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Related posts */}
        {getRelatedBlogs.length > 0 && (
          <div className="border-t border-gray-700 pt-10">
            <h2 className="text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedBlogs.map((related) => (
                <Link
                  href={`/blogs/${related.slug}`}
                  key={related.id}
                  className="bg-[#282a33] rounded-lg overflow-hidden hover:shadow-md hover:shadow-[rgba(4,206,250,0.2)] transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={
                        related.coverImage ||
                        "/avatar.webp?height=400&width=600"
                      }
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 hover:text-[rgb(4,206,250)]">
                      {related.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {related.excerpt || related.content.slice(0, 100) + "..."}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
