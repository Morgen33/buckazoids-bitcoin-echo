
import { Link } from "react-router-dom";

export type NavigationItem = {
  name: string;
  href?: string;
  submenu?: { name: string; href: string }[];
};

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
    submenu: [
      { name: "Join Us", href: "#community" },
      { name: "Discord", href: "#discord" },
      { name: "Twitter", href: "https://x.com/BuckazoidsSOL" },
    ],
  },
  {
    name: "Contact",
    href: "/contact", // Direct link instead of submenu
  },
];
