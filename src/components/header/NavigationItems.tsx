
export interface NavigationItem {
  name: string;
  href?: string;
  submenu?: { name: string; href: string }[];
}

export const navigationItems: NavigationItem[] = [
  {
    name: "Introduction",
    submenu: [
      { name: "About", href: "/about" },
    ],
  },
  {
    name: "Resources",
    submenu: [
      { name: "Documentation", href: "/docs" },
      { name: "White Paper", href: "https://github.com/Buckazoidscto/Buckazoids-white-paper-CTO-/wiki/Buckazoids-white-paper-English(CTO)" },
      { name: "News", href: "/news" },
      { name: "Vocabulary", href: "/vocabulary" },
    ],
  },
  {
    name: "Innovation",
    href: "/innovation",
  },
  {
    name: "Participate",
    submenu: [
      { name: "How to Buy", href: "#" },
      { name: "Community", href: "/community" },
    ],
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];
