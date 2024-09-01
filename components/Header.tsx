import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

export const Header = () => {
  return (
    <header className='border-b border-base w-full'>
      <div className='wrapper flex items-center justify-between'>
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

        {/* Sign in and mobile nav */}
        <div className='flex-center gap-3'>
          {/* Sign in button */}
          <div className='flex bg-primary hover:bg-primary-hover py-2 px-3 rounded-full flex-center'>
            Sign In
          </div>
          {/* Mobile nav */}
          <div className=' md:hidden'>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
