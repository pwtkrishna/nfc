export type NavBarItem = {
  title: string;
  href?: string;
  subMenu?: {
    title: string;
    href: string;
  }[];
};

export type NavBarType = NavBarItem[];
