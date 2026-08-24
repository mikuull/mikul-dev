import { ProjectList } from "@/components/project/project-list";

export default function ProjectsPage() {
  return (
    <div className="relative flex flex-col justify-center min-h-[75vh] py-12 w-full">
      <div className="relative z-10 w-full space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Projects
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A collection of web applications, tools, and open-source projects
            I&apos;ve built.
          </p>
        </div>
        <ProjectList />
      </div>
    </div>
  );
}
