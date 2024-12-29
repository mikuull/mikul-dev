"use client";
import { scrollToElement } from "@/utils/scroll";
import React from "react";

export const NavigationLink = ({ name, path }: NavigationLinkType) => {
  return (
    <p
      className="cursor-pointer text-[#979797] font-semibold"
      onClick={(e) => {
        scrollToElement(e, path, 80);
      }}
    >
      {name}
    </p>
  );
};
