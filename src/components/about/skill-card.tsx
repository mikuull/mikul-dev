import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiDocker,
  SiJavascript,
} from "react-icons/si";
import { Skill } from "@/data/about.data";

const iconMap = {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiDocker,
  SiJavascript,
};

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  const IconComponent = iconMap[skill.iconName] || SiTypescript;

  return (
    <div className="group flex items-center gap-3 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/80 shadow-sm backdrop-blur-sm transition-all hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:scale-[1.02]">
      <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-500 transition-colors">
        <IconComponent className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-emerald-500 transition-colors">
          {skill.name}
        </h4>
        <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
          {skill.category}
        </span>
      </div>
    </div>
  );
};
