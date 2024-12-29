import React from "react";
import { navigationLinks } from "../data/navigation.data";
import { NavigationLink } from "./navigation-link";
import Image from "next/image";

export const Navigation = () => {
  return (
    <nav className="fixed bg-purplebg w-[90%] left-24 p-4 rounded-xl mt-8">
      <div className="flex items-center justify-between px-4">
        <div>
          <Image
            src={"https://henriquesousadev.vercel.app/assets/logo.a6ee3657.svg"}
            alt="logo"
            width={32}
            height={32}
          />
        </div>
        <ul className="flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <NavigationLink {...link} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
