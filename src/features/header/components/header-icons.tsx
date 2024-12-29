import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const HeaderIcons = () => {
  return (
    <ul className="flex items-center space-x-4 text-[#979797]">
      <li className="cursor-pointer hover:translate-y-2 transition-transform duration-150">
        <Link href="https://github.com/mikuull" target="__blank">
          <FaGithub size={36} />
        </Link>
      </li>
      <li className="cursor-pointer hover:translate-y-2 transition-transform duration-150">
        <Link
          href="https://www.linkedin.com/in/mateusz-mikulski-10a775313/"
          target="__blank"
        >
          <FaLinkedin size={36} />
        </Link>
      </li>
      <li className="cursor-pointer hover:translate-y-2 transition-transform duration-150">
        <Link href="https://x.com/mmikulski643" target="__blank">
          <FaXTwitter size={36} />
        </Link>
      </li>
    </ul>
  );
};
