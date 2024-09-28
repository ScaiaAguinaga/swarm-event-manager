import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import AuthNav from "./AuthNav";

export const Header = () => {
  return (
    <header className="w-full border-b border-base">
      {/* Header content */}
      <div className="wrapper flex h-20 items-center justify-between">
        {/* Logo link that redirects to landing page */}
        <Link href="/" className="w-[115px]">
          <Image
            src="/assets/icons/logo-placeholder-small.svg"
            width={74}
            height={38}
            alt="Swarm Website Logo"
            className="bg-white"
            style={{ width: "auto", height: "auto" }} // CSS to maintain aspect ratio
          />
        </Link>

        {/* Nav bar items */}
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="w-[115px]">
          <AuthNav />
        </div>
      </div>
    </header>
  );
};
