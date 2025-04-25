export interface NavigationItem {
  name: string;
  href?: string;
  submenu?: { name: string; href: string }[];
}

export const navigationItems: NavigationItem[] = [
  {
    name: "Introduction",
    submenu: [
      { name: "Getting Started", href: "/getting-started" },
      { name: "How it Works", href: "/how-it-works" },
      { name: "About", href: "/about" },
      { 
        name: "White Paper", 
        href: "https://github.com/Buckazoidscto/Buckazoids-white-paper-CTO-/wiki/Buckazoids-white-paper-English(CTO)" 
      },
    ],
  },
  {
    name: "Resources",
    submenu: [
      { name: "Documentation", href: "/docs" },
      { name: "Vocabulary", href: "/vocabulary" },
      { name: "News", href: "/news" },
    ],
  },
  {
    name: "Innovation",
    href: "/innovation",
  },
  {
    name: "Participate",
    submenu: [
      { name: "Buy Buckazoids", href: "#" },
      { name: "Choose Your Wallet", href: "#" },
      { name: "Community", href: "/community" },
    ],
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];
