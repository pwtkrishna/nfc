import blogs from "@/data/blog.json";
import { Blog } from "@/types/blogs";

export function getPaginatedBlogs(
  page: number,
  pageSize: number
): {
  data: Blog[];
  total: number;
} {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const data = blogs.slice(start, end);
  return {
    data,
    total: blogs.length,
  };
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(currentSlug: string, limit = 2) {
  return blogs.filter((blog) => blog.slug !== currentSlug).slice(0, limit);
}
