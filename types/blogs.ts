export interface Blogs {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  mainImage?: string;
  videos?: string[];
}
