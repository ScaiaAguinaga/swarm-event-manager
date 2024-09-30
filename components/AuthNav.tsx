"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import NavItems from "./NavItems";
import Image from "next/image";

const AuthNav = () => {
  const { data: session } = useSession();
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    const curr = isActive;
    setIsActive(!curr);
  };

  return (
    <div className="flex items-center justify-end">
      {/* Display sign in button if no session user */}
      {!session && (
        <button
          onClick={() => signIn("google")}
          className="mr-2 h-8 rounded-lg bg-primary px-3 py-1 md:mr-0"
        >
          Sign In
        </button>
      )}

      {/* Nav menu icon */}
      <div className="relative flex">
        {/* Only display hamburger menu on screens < md size */}
        {/* Always display profile image if signed in */}
        <div onClick={toggleMenu}>
          {!session ? (
            <FiMenu className={`flex h-8 w-8 md:hidden`} />
          ) : (
            <Image
              src={session.user?.image as string}
              width={40}
              height={40}
              alt="User profile image"
              className="rounded-full"
            />
          )}
        </div>

        {/* Nav popup menu */}
        {isActive && (
          <div className="absolute right-0 top-12 flex min-w-[150px] flex-col rounded-[20px] border-2 border-base bg-background-color p-4">
            {/* User name and email */}
            {session && (
              <div className="text-center">
                <h2 className="text-white">{session.user?.name}</h2>
                <p className="mb-1 text-gray-400">{session.user?.email}</p>
              </div>
            )}

            {/* Menu items */}
            <div className="flex flex-col justify-center md:flex-row">
              {/* Display nav items on screens < md size */}
              <div className="flex md:hidden">
                <NavItems callback={toggleMenu} />
              </div>

              {/* Sign out button */}
              {session && (
                <button
                  onClick={() => signOut()}
                  className="mb-1 mt-2 font-semibold md:mt-2 md:rounded-lg md:bg-primary md:px-3 md:py-1"
                >
                  <h2>Sign Out </h2>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthNav;
