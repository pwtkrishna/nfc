import BlogPageContent from "@/components/BlogPageContent";
import { getBlogBySlug, getRelatedBlogs } from "@/lib/blogService";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return notFound();

  const relatedBlogs = await getRelatedBlogs(params.slug);

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
    <BlogPageContent
      blog={blog}
      relatedBlogs={relatedBlogs}
      publishDate={publishDate}
      readingTime={readingTime}
      author={author}
    />
  );
}
