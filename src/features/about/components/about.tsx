import Image from "next/image";
import React from "react";
import memoji1 from "@/assets/memoji1.png";
import { Tag } from "@/features/core/components/tag";

export const About = () => {
  return (
    <section className="py-36" id="#about">
      <div className="flex items-center justify-center space-x-80">
        <div>
          <Image
            src={memoji1.src}
            alt=""
            aria-hidden
            width={450}
            height={450}
          />
        </div>
        <div className="flex flex-col space-y-4 max-w-[450px]">
          <div className="w-1/2">
            <Tag text="✨ About me" variant="purple" size="large" />
          </div>
          <p className="text-5xl font-bold">
            Hey, I'm <span className="text-main font-extrabold">Mateusz</span>
          </p>
          <p className="text-[#979797] font-semibold leading-relaxed">
            I am an 18-year-old self-taught Frontend Software Developer from
            Poland, passionate about creating engaging and responsive web
            experiences. With a strong focus on modern web technologies like
            React, NextJS Typescript, and Tailwind, I enjoy building
            user-friendly interfaces that deliver seamless performance across
            devices. I am constantly learning and expanding my skill set to stay
            up to date with the latest industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};
