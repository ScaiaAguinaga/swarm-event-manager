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
      <div onClick={toggleIsActive} className='w-10 h-10 bg-primary'></div>

      {/* If mobile nav is active, display nav items */}
      {isActive && (
        <div className='absolute flex w-screen h-screen top-0 left-0 justify-end bg-[rgba(255,255,255,0.40)]'>
          {/* Button to close mobile nav */}
          <button
            onClick={toggleIsActive}
            className='absolute top-0 right-5 text-white mt-5 ml-5 pb-1 bg-primary w-10 h-10 flex-center rounded-full text-2xl font-bold'
          >
            X
          </button>

          <div className='bg-black w-[500px] h-screen py-10'>
            <h1 className='text-center font-bold text-4xl my-10'>Swarm</h1>
            <NavItems />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
