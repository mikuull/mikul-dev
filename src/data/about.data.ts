export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

export interface Skill {
  name: string;
  iconName:
    | "SiTypescript"
    | "SiNextdotjs"
    | "SiReact"
    | "SiTailwindcss"
    | "SiNodedotjs"
    | "SiPostgresql"
    | "SiPrisma"
    | "SiGit"
    | "SiDocker"
    | "SiJavascript";
  category: "Frontend" | "Backend" | "Tools";
}

export const aboutData = {
  bio: "I'm a Full-stack Developer passionate about building high-performance web applications with immaculate UI/UX. I focus on clean architecture, type safety, and developer tooling.",
  experience: [
    {
      period: "2025 — 2026",
      role: "Founder & Lead Developer",
      company: "neocodedev.pl",
      description:
        "Building modern web applications, and scalable backend architectures for clients.",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
      ],
    },
    {
      period: "2022 — 2025",
      role: "Full-stack Developer",
      company: "Freelance",
      description:
        "Delivered custom web solutions and client projects from scratch. Handled full product lifecycle, client requirements, API integrations, and performance optimizations.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "React"],
    },
  ] as Experience[],
  skills: [
    { name: "TypeScript", iconName: "SiTypescript", category: "Frontend" },
    { name: "Next.js", iconName: "SiNextdotjs", category: "Frontend" },
    { name: "React", iconName: "SiReact", category: "Frontend" },
    { name: "Tailwind CSS", iconName: "SiTailwindcss", category: "Frontend" },
    { name: "Node.js", iconName: "SiNodedotjs", category: "Backend" },
    { name: "PostgreSQL", iconName: "SiPostgresql", category: "Backend" },
    { name: "Prisma", iconName: "SiPrisma", category: "Backend" },
    { name: "Git", iconName: "SiGit", category: "Tools" },
    { name: "Docker", iconName: "SiDocker", category: "Tools" },
    { name: "JavaScript", iconName: "SiJavascript", category: "Frontend" },
  ] as Skill[],
};
