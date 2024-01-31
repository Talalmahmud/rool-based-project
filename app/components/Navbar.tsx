"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        <div className=" h-[50px] flex justify-center items-center gap-4">
          <p>{session.user.name}</p>
          <span
            className=" text-xl font-bold text-red-700"
            onClick={() => signOut()}
          >
            Logout
          </span>
        </div>
      </>
    );
  }
  return (
    <div className=" flex justify-center items-center h-[40px] bg-green-200 ">
      <span
        className=" text-xl text-red-500 cursor-pointer"
        onClick={() => signIn()}
      >
        Sign In
      </span>
    </div>
  );
};

export default Navbar;
