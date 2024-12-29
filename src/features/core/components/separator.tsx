import React from "react";
import { twMerge } from "tailwind-merge";

export const Separator = ({ className }: SeparatorProps) => {
  return (
    <span className={twMerge("w-screen h-1 text-purplebg", className)}></span>
  );
};
