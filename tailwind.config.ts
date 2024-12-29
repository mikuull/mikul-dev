import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purplebg: "#14142b",
        main: "#7b4ae2;",
        bg: "#0C0F17",
      },
    },
  },
  plugins: [],
} satisfies Config;
