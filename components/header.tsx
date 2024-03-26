"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center lg:mx-8 py-4">
      <div className="w-12 h-12 md:w-8 md:h-8 sm:w-6 sm:h-6 xs:w-4 xs:h-4 ">
        <img src="favicon.ico" className="w-full h-full" />
      </div>
      <div className="flex items-center justify-center lg:gap-8 h-10 bg-yellow-900 rounded-full px-2 md:text-md sm:text-sm xs:text-xs  ">
        <p className="hover:bg-slate-800 rounded-full px-3">All</p>
        <p className="hover:bg-slate-800 rounded-full px-2">About</p>
        <p className="hover:bg-slate-800 rounded-full px-2">Project</p>
        <p className="hover:bg-slate-800 rounded-full px-2">Media</p>
      </div>
      <button onClick={() => {}}>Contact me</button>
    </div>
  );
};

export default Header;