"use client";

import React, { useState } from "react";
import { navigationLinks } from "../data/navigation.data";
import { NavigationLink } from "./navigation-link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed bg-purplebg w-[90%] left-1/2 transform -translate-x-1/2 p-4 rounded-xl mt-8 z-50 max-w-screen">
      <div className="flex items-center justify-between px-4">
        <div>
          <Image
            src={"https://henriquesousadev.vercel.app/assets/logo.a6ee3657.svg"}
            alt="logo"
            width={32}
            height={32}
          />
        </div>
        <button
          className="lg:hidden text-main text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`flex flex-col lg:flex-row items-center lg:space-x-8 absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-purplebg lg:bg-transparent p-6 lg:p-0 rounded-lg lg:rounded-none shadow-lg lg:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          {navigationLinks.map((link) => (
            <li key={link.path} className="my-2 lg:my-0">
              <NavigationLink {...link} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
