"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ callback }: { callback?: () => void }) => {
  // Gets current route path
  const pathname = usePathname();

  return (
    <ul className="flex-center flex-between flex w-full flex-col gap-x-5 gap-y-2 md:flex-row">
      {headerLinks.map((link) => {
        // Determines if the link is active based on pathname
        const isActive: boolean = link.route === pathname;

        return (
          // Renders active link in primary color
          <li
            key={link.route}
            onClick={callback}
            className={`${
              isActive ? "text-primary" : "text-white"
            } md:flex-center text-left font-semibold`}
          >
            <h2>
              <Link href={link.route}>{link.label}</Link>
            </h2>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
