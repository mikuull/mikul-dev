import { aboutData } from "@/data/about.data";
import { ExperienceItem } from "@/components/about/experience-item";
import { SkillsGrid } from "@/components/about/skills-grid";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col justify-center min-h-[75vh] py-12 w-full">
      <div className="relative z-10 w-full space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            {aboutData.bio}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Experience
          </h2>
          <div className="space-y-8">
            {aboutData.experience.map((item, index) => (
              <ExperienceItem key={index} experience={item} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Tech Stack & Skills
          </h2>
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
}
