"use client";

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import NavProfile from "./NavProfile";

export const Header = () => {
  return (
    <header className='border-b border-base w-full'>
      {/* Header content */}
      <div className='wrapper flex items-center justify-between'>
        {/* Logo link that redirects to landing page */}
        <Link href='/'>
          <Image
            src='/assets/icons/logo-placeholder-small.svg'
            width={74}
            height={38}
            alt='Swarm Website Logo'
            className='bg-white'
          />
        </Link>

        {/* Nav bar items */}
        <nav className='hidden md:flex-between w-full max-w-xs'>
          <NavItems />
        </nav>

        {/* Login and profile for tablet+ */}
        <div className='hidden md:flex'>
          <NavProfile />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
