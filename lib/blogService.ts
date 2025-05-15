import blogs from "@/data/blog.json";
import { Blog } from "@/types/blogs";

export async function getPaginatedBlogs(
  page: number,
  pageSize: number
): Promise<{ data: Blog[]; total: number }> {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const data = blogs.slice(start, end);
  return Promise.resolve({
    data,
    total: blogs.length,
  });
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  const blog = blogs.find((blog) => blog.slug === slug);
  return Promise.resolve(blog);
}

export async function getRelatedBlogs(
  currentSlug: string,
  limit = 2
): Promise<Blog[]> {
  const related = blogs
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, limit);
  return Promise.resolve(related);
}
