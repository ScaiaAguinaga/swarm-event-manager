import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-base">
      <div className="wrapper flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/icons/logo-placeholder-small.svg"
            width={74}
            height={38}
            alt="Swarm Website Logo"
            className="bg-white"
            style={{ width: "auto", height: "auto" }} // CSS to maintain aspect ratio
          />
        </Link>
        <p>2024 Swarm, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
