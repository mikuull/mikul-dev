export interface ContactLink {
  title: string;
  value: string;
  href: string;
  iconName: "Mail" | "Github" | "Linkedin" | "Twitter" | "MessageSquare";
  description: string;
}

export const contactData = {
  title: "Get in touch",
  description:
    "Have a project in mind, a question, or just want to chat about code? Feel free to reach out through any of these channels.",
  email: "mmikulski643@gmail.com",
  links: [
    {
      title: "Email",
      value: "mmikulski643@gmail.com",
      href: "mailto:mmikulski643@gmail.com",
      iconName: "Mail",
      description: "Direct line for project inquiries and proposals.",
    },
    {
      title: "GitHub",
      value: "github.com/mikuull",
      href: "https://github.com/mikuull",
      iconName: "Github",
      description: "Check out my open-source work and repositories.",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/mateusz-mikulski-10a775313/",
      href: "https://www.linkedin.com/in/mateusz-mikulski-10a775313/",
      iconName: "Linkedin",
      description: "Connect with me professionally.",
    },
    {
      title: "X",
      value: "@mmikulski643",
      href: "https://x.com/mmikulski643",
      iconName: "Twitter",
      description: "Follow my daily dev journey and thoughts.",
    },
  ] as ContactLink[],
};
