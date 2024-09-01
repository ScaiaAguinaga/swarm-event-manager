import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

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

        <div className='flex-center gap-3'>
          {/* Sign Up/Log In */}
          <div className='flex bg-primary hover:bg-primary-hover py-2 px-3 rounded-full flex-center'>
            Sign In
          </div>
          {/* Mobile nav bar */}
          <div className='w-10 h-10 bg-primary md:hidden'></div>
        </div>
      </div>
    </header>
  );
};
