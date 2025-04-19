
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
      { name: "Start Here", href: "#intro" },
      { name: "White Paper", href: "#whitepaper" },
      { name: "Resources", href: "#resources" },
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
    submenu: [
      { name: "Contact Us", href: "/contact" },
    ],
  },
];
