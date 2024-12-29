import { Tag } from "@/features/core/components/tag";
import React from "react";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiJavaLine } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { FaLinux } from "react-icons/fa";

export const Skills = () => {
  return (
    <section className="py-36">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <Tag text="💻 Skills" variant="purple" size="large" />
          <p className="text-5xl font-extrabold">Technologies and skills</p>
        </div>
        <div className="flex flex-col items-center pt-28 space-y-12">
          <p className="text-[#979797] font-semibold text-xl">
            Techs i use on a daily basis
          </p>
          <ul className="flex items-center space-x-12 text-main">
            <li>
              <FaReact size={60} />
            </li>
            <li>
              <IoLogoJavascript size={60} />
            </li>
            <li>
              <SiTypescript size={56} />
            </li>
            <li>
              <RiNextjsFill size={60} />
            </li>
            <li>
              <RiTailwindCssFill size={60} />
            </li>
            <li>
              <FaGitAlt size={60} />
            </li>
            <li>
              <FaGithub size={60} />
            </li>
            <li>
              <IoLogoFigma size={60} />
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center pt-28 space-y-12">
          <p className="text-[#979797] font-semibold text-xl">
            Other techs I've had contact with
          </p>
          <ul className="flex items-center space-x-12 text-main">
            <li>
              <RiJavaLine size={60} />
            </li>
            <li>
              <SiPhp size={60} />
            </li>
            <li>
              <TbBrandMysql size={56} />
            </li>
            <li>
              <SiPostgresql size={60} />
            </li>
            <li>
              <FaLinux size={60} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
