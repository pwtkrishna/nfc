import BlogPageContent from "@/components/BlogPageContent";
import { getBlogBySlug, getRelatedBlogs } from "@/lib/blogService";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(slug);

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
    <BlogPageContent
      blog={blog}
      relatedBlogs={relatedBlogs}
      publishDate={publishDate}
      readingTime={readingTime}
      author={author}
    />
  );
}
