
export interface NavigationItem {
  name: string;
  href?: string;
  submenu?: { name: string; href: string }[];
}

export const navigationItems: NavigationItem[] = [
  {
    name: "Introduction",
    submenu: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "White Paper", href: "https://github.com/Buckazoidscto/Buckazoids-white-paper-CTO-/wiki/Buckazoids-white-paper-English(CTO)" },
    ],
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
