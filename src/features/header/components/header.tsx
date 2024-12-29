"use client";
import { Tag } from "@/features/core/components/tag";
import Image from "next/image";
import React from "react";
import memoji from "@/assets/memoji.png";
import { HeaderIcons } from "./header-icons";
import { FaDownload } from "react-icons/fa";

export const Header = () => {
  return (
    <section className="flex py-60" id="#header">
      <div className="flex items-center justify-between space-x-80 mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="w-1/2">
              <Tag text="✔ Open to work" variant="green" size="small" />
            </div>
            <Tag text="👋 Hello World!" variant="purple" size="large" />
          </div>

          <div className="text-5xl font-extrabold space-y-2">
            <p>Mateusz</p>
            <p>Mikulski</p>
          </div>
          <div className="flex">
            <p className="text-[#979797] font-semibold text-lg">
              <span className="text-main font-extrabold">18</span> years old ×{" "}
              <span className="text-main font-extrabold">Frontend </span>
              developer
            </p>
          </div>
          <HeaderIcons />
        </div>
        <div>
          <Image
            src={memoji.src}
            alt=""
            aria-hidden
            width={400}
            height={400}
            className="hover:animate-hover-pulse cursor-pointer"
          />
        </div>
        <div>
          <div className="flex flex-col items-center space-y-4">
            <button className="flex items-center gap-2 border-main border-2 px-5 py-3 rounded-xl bg-purplebg text-main font-bold hover:translate-y-2 transition-transform duration-150">
              <FaDownload className="text-lg" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
