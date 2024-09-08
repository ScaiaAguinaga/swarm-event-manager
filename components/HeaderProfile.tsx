"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const HeaderProfile = () => {
  const { data: session } = useSession();

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div>
      {session ? (
        <div className="relative">
          <Image
            src={session.user?.image as string}
            width={35}
            height={35}
            alt="profile picture"
            onClick={() => {
              const state = isPopupVisible;
              setIsPopupVisible(!state);
            }}
            className="rounded-full"
          />
          {isPopupVisible && (
            <div className="absolute right-[-40px] top-10 flex flex-col items-center rounded-[20px] border-2 border-base bg-background-color p-4 md:right-6 md:top-8">
              <h1 className="text-center text-xl">{session.user?.name}</h1>
              <p className="overflow-hidden text-center text-xl text-gray-400">
                {session.user?.email}
              </p>
              <button
                onClick={() => signOut()}
                className="mt-4 w-[120px] rounded-full bg-primary px-2 py-[6px] font-bold text-white hover:bg-primary-hover"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="rounded-full bg-primary px-2 py-[6px] font-bold text-white hover:bg-primary-hover"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default HeaderProfile;
