import type { NavBarType } from "@/types/NavBarItemTypes";

export const navBarItems: NavBarType = [
  { title: "Home", href: "/" },
  {
    title: "Shop Now",
    subMenu: [
      { title: "NFC Card", href: "/all-collection/#nfc-card" },
      {
        title: "Standees and Review cards",
        href: "/all-collection/#product-card",
      },
      { title: "Bundle Offer", href: "/all-collection/#bundle-offer" },
    ],
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
