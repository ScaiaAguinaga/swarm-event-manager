import Image from "next/image";
import Link from "next/link";

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
          <h1>Link 1</h1>
          <h1>Link 2</h1>
          <h1>Link 3</h1>
          <h1>Link 4</h1>
        </nav>

        {/* Sign Up/Log In */}
        <h1>Log In</h1>

        {/* Mobile nav bar */}
        <div className='w-10 h-10 bg-primary md:hidden'></div>
      </div>
    </header>
  );
};
