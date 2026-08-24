import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TechBadge } from "./tech-badge";
import { Project } from "@/data/projects.data";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/80 shadow-sm backdrop-blur-sm transition-all hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:scale-[1.01] overflow-hidden"
    >
      {project.image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105 duration-300"
          />
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-500 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-500 transition-colors" />
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-6">
        {project.stack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </Link>
  );
};
