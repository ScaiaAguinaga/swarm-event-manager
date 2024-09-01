import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='w-full border-t border-base'>
      <div className='flex flex-col wrapper gap-4 justify-between items-center sm:flex-row'>
        <Link href='/'>
          <Image
            src='/assets/icons/logo-placeholder-small.svg'
            width={74}
            height={38}
            alt='Swarm Website Logo'
            className='bg-white'
          />
        </Link>
        <p>2024 Swarm, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
