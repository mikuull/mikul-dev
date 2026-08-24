export interface Project {
  title: string;
  description: string;
  link: string;
  image?: string;
  stack: string[];
}

export const projectsData: Project[] = [
  {
    title: "Bookly",
    description:
      "An advanced booking and scheduling platform built with modern web tech and seamless calendar sync.",
    link: "https://github.com/mikuull/bookly",
    image: "/bookly.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    title: "DevMetrics",
    description:
      "Developer productivity tracking and analytics dashboard with real-time graphs and GitHub integration.",
    link: "https://github.com",
    image: "/projects/devmetrics.png",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    title: "UI Kit",
    description:
      "A minimal, highly reusable component library styled specifically for modern SaaS products.",
    link: "https://github.com",
    image: "/projects/uikit.png",
    stack: ["Next.js", "Tailwind CSS", "Radix UI"],
  },
];
