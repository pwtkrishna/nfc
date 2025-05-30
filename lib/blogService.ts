import blogs from "@/data/blog.json";
import { Blogs } from "@/types/blogs";

export async function getPaginatedBlogs(
  page: number,
  pageSize: number
): Promise<{ data: Blogs[]; total: number }> {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const data = blogs.slice(start, end);
  return Promise.resolve({
    data,
    total: blogs.length,
  });
}

export async function getBlogBySlug(slug: string): Promise<Blogs | undefined> {
  return Promise.resolve(blogs.find((blog) => blog.slug === slug));
}

export async function getRelatedBlogs(
  currentSlug: string,
  limit = 2
): Promise<Blogs[]> {
  const related = blogs
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, limit);
  return Promise.resolve(related);
}
