import type { NavBarType } from "@/types/NavBarItemTypes";

export const navBarItems: NavBarType = [
  { title: "Home", href: "/" },
  {
    title: "Shop Now", // No subMenu here!
  },
  { title: "For Teams", href: "/for-teams" },
  {
    title: "Company",
    subMenu: [
      { title: "About Us", href: "/about" },
      { title: "FAQs", href: "/faqs" },
      { title: "Blogs", href: "/blogs" },
      { title: "In the news", href: "/in-the-news" },
    ],
  },
];
