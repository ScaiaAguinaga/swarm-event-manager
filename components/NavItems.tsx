"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  // Gets current route path
  const pathname = usePathname();

  return (
    <ul className='flex flex-col w-full items-start gap-5 md:flex-between md:flex-row'>
      {headerLinks.map((link) => {
        // Determines if the link is active based on pathname
        const isActive: boolean = link.route === pathname;

        return (
          // Renders active link in primary color
          <li
            key={link.route}
            className={`${
              isActive ? "text-primary" : "text-white"
            } flex-center`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
