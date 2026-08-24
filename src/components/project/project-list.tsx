import { projectsData } from "@/data/projects.data";
import { ProjectCard } from "./project-card";

export const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};
