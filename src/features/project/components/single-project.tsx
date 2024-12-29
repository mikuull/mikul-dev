"use client";
import { Tag } from "@/features/core/components/tag";
import Image from "next/image";
import React from "react";

export const SingleProject = ({
  title,
  description,
  technologies,
  image,
  href,
}: SingleProjectType) => {
  return (
    <div
      className="border border-purplebg rounded-xl hover:bg-purplebg transition-colors cursor-pointer hover:animate-hover-pulse"
      onClick={() => (href ? window.open(href, "_blank") : "")}
    >
      <div className="flex flex-col p-8">
        <div className="pb-4">
          <p className="font-bold">{title}</p>
          <p className="font-bold text-[#979797]">{description}</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {technologies.map((tag, tagIndex) => (
            <Tag key={tagIndex} {...tag} />
          ))}
        </div>
        <Image
          src={image}
          alt=""
          aria-hidden
          width={400}
          height={300}
          className="rounded-xl py-4"
        />
      </div>
    </div>
  );
};
