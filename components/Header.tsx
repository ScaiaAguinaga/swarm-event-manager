"use client";

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import HeaderProfile from "./HeaderProfile";

export const Header = () => {
  return (
    <header className="w-full border-b border-base">
      {/* Header content */}
      <div className="wrapper flex h-20 items-center justify-between">
        {/* Logo link that redirects to landing page */}
        <Link href="/">
          <Image
            src="/assets/icons/logo-placeholder-small.svg"
            width={74}
            height={38}
            alt="Swarm Website Logo"
            className="bg-white"
          />
        </Link>

        {/* Nav bar items */}
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>
        <div className="flex justify-end gap-x-4 md:w-20 items-center">
          {/* Login and profile for tablet+ */}
          <HeaderProfile />
          {/* Mobile navigation bar */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
