"use client";

import { useState } from "react";
import NavItems from "./NavItems";

const MobileNav = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleIsActive = () => {
    const active: boolean = isActive;
    setIsActive(!active);
  };

  return (
    <div>
      {/* Mobile nav hamburger icon */}
      <button
        onClick={toggleIsActive}
        className={`h-8 w-8 ${isActive ? "bg-primary" : "bg-white"} z-10 relative`}
      >
        X
      </button>

      {/* If mobile nav is active, display nav items */}
      {isActive && (
        <div className="absolute left-0 top-0 z-0 flex h-screen w-screen flex-col bg-background-color">
          <div className="flex flex-grow flex-col items-center justify-center pb-40">
            <h1 className="mb-10 text-3xl font-bold">Swarm</h1>
            <NavItems />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
