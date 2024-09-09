"use client";

import { useState } from "react";
import NavItems from "./NavItems";
import { FiMenu } from "react-icons/fi";

const MobileNav = () => {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);

  const toggleIsActive = () => {
    const active: boolean = isNavActive;
    setIsNavActive(!active);
  };

  const handleNavClick = () => {
    setIsNavActive(false);
  };

  return (
    <div>
      {/* Mobile nav hamburger icon */}
      <FiMenu
        onClick={toggleIsActive}
        className={`h-8 w-8 ${isNavActive ? "text-primary" : "text-white"} relative z-10`}
      />

      {/* If mobile nav is active, display nav items */}
      {isNavActive && (
        <div className="absolute left-0 top-0 z-0 flex h-screen w-screen flex-col bg-background-color">
          <div className="flex flex-grow flex-col items-center justify-center pb-40">
            <h1 className="mb-10 text-3xl font-bold">Swarm</h1>
            <NavItems callback={handleNavClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
