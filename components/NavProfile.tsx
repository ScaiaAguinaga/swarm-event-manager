"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const NavProfile = () => {
  const { data: session } = useSession();

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div>
      {session ? (
        <div className='relative'>
          <Image
            src={session.user?.image as string}
            width={35}
            height={35}
            alt='profile picture'
            onClick={() => {
              const state = isPopupVisible;
              setIsPopupVisible(!state);
            }}
            className='rounded-full'
          />
          {isPopupVisible && (
            <div className='absolute bg-background-color border-base border-2 top-8 right-6 rounded-[20px] flex flex-col p-4 items-center'>
              <h1 className='text-xl text-center'>{session.user?.name}</h1>
              <p className='text-xl text-gray-400 text-center overflow-hidden'>
                {session.user?.email}
              </p>
              <button
                onClick={() => signOut()}
                className='bg-primary w-[120px] hover:bg-primary-hover text-white font-bold rounded-full py-[6px] px-2 mt-4'
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className='bg-primary hover:bg-primary-hover text-white font-bold rounded-full py-[6px] px-2'
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default NavProfile;
