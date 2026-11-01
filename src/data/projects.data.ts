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
    title: "mikul.dev",
    description:
      "My personal portfolio: a fast, dark-themed site with an animated typing hero, project showcase and responsive sidebar navigation.",
    link: "https://github.com/mikuull/mikul-dev",
    image: "/mikuldev.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  },
  {
    title: "Linkify",
    description:
      "A dark-themed bio link & link management platform with real-time analytics and customizable profile pages.",
    link: "https://github.com/mikuull/linkify",
    image: "/linkify.png",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];
