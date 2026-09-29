import { TechBadge } from "@/components/project/tech-badge";
import { Experience } from "@/data/about.data";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800 space-y-3">
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 border-2 border-neutral-50 dark:border-neutral-950" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {experience.role}{" "}
          <span className="text-emerald-500">@ {experience.company}</span>
        </h3>
        <span className="text-xs font-mono text-neutral-500">
          {experience.period}
        </span>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {experience.skills.map((skill) => (
          <TechBadge key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}
