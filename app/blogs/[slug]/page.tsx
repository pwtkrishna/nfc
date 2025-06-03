import { notFound } from "next/navigation";
import BlogPageContent from "@/components/BlogPageContent";
import { getBlogBySlug, getRelatedBlogs } from "@/lib/blogService";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

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
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <BlogPageContent
        blog={blog}
        relatedBlogs={relatedBlogs}
        publishDate={publishDate}
        readingTime={readingTime}
        author={author}
      />
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
