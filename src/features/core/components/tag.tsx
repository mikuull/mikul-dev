import React from "react";
import { twMerge } from "tailwind-merge";

export const Tag = ({ text, variant, size }: TagType) => {
  const className = twMerge(
    "inline-block px-4 py-1 rounded-xl font-bold text-center",
    variant === "purple"
      ? "bg-purplebg text-main"
      : "bg-[#1c4e3a] text-[#4ae290]",
    size === "small"
      ? "text-xs"
      : size === "normal"
      ? "text-sm p-2 xl:p-3"
      : "p-4 text-lg"
  );
  return <div className={className}>{text}</div>;
};
