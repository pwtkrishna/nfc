import type { NavBarType } from "@/types/NavBarItemTypes";

export const navBarItems: NavBarType = [
  { title: "Home", href: "/" },
  {
    title: "Shop Now",
    subMenu: [
      {
        title: "NFC Business Cards",
        href: "/all-collection/#nfc-business-cards",
      },
      {
        title: "Premium Collection",
        href: "/all-collection/#premium-collection",
      },
      { title: "Eco Collection", href: "/all-collection/#eco-collection" },
      { title: "Bundle Offers", href: "/all-collection/#bundle-offers" },
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
