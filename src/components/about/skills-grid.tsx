import { aboutData } from "@/data/about.data";
import { SkillCard } from "./skill-card";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {aboutData.skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
