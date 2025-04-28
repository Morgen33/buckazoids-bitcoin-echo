
export interface NavigationItem {
  name: string;
  href?: string;
  submenu?: { name: string; href: string }[];
}

export const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Introduction",
    submenu: [
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
      { name: "News", href: "/news" },
    ],
  },
  {
    name: "Participate",
    submenu: [
      { name: "Buy Buckazoids", href: "/buy" },
      { name: "Community", href: "/community" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
];
