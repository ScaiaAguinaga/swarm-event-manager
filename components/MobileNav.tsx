"use client";

import { useState } from "react";
import NavItems from "./NavItems";
import { FiMenu } from "react-icons/fi";

const MobileNav = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleIsActive = () => {
    const active: boolean = isActive;
    setIsActive(!active);
  };

  const handleNavClick = () => {
    setIsActive(false);
  };

  return (
    <div className="relative">
      {/* Mobile nav hamburger icon */}
      <FiMenu
        onClick={toggleIsActive}
        className={`h-8 w-8 ${isActive ? "text-primary" : "text-white"} relative z-10`}
      />

      {/* If mobile nav is active, display nav items */}
      {isActive && (
        <div className="absolute right-0 top-10">
          <div className="text-nowrap rounded-[20px] border-2 border-base bg-background-color p-4">
            <NavItems callback={toggleIsActive} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
