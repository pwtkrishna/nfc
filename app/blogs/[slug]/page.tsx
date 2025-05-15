import { getBlogBySlug, getRelatedBlogs } from "@/lib/blogService";
import BlogPageContent from "@/components/BlogPageContent";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return notFound();

  const relatedBlogs = await getRelatedBlogs(params.slug);

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
