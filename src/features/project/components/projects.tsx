import { Tag } from "@/features/core/components/tag";
import React from "react";
import { projects } from "../data/projects.data";
import { SingleProject } from "./single-project";

export const Projects = () => {
  return (
    <section className="py-36">
      <div className="flex flex-col space-y-6 max-w-[700px] px-28">
        <div>
          <Tag text="🔗 Projects" variant="purple" size="large" />
        </div>
        <p className="text-5xl font-extrabold">Works and projects</p>
      </div>
      <div className="grid grid-cols-4 gap-10 p-20">
        {projects.map((project, index) => (
          <SingleProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
};