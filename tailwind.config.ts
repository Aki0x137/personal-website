import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          border: "var(--theme-border)",
          line: {
            light: "var(--theme-line-light)",
            dark: "var(--theme-line-dark)",
          },
          moon: {
            light: "var(--theme-moon-light)",
            dark: "var(--theme-moon-dark)",
          },
          sun: {
            light: "var(--theme-sun-light)",
            dark: "var(--theme-sun-dark)",
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
