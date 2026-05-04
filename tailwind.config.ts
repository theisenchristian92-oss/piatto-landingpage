import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        piatto: {
          terracotta: "#D96C3B",
          cream: "#F5E9DA",
          olive: "#55623B",
          ink: "#1F211A",
          muted: "#696356",
          line: "#E6D8C5",
          card: "#FFF9F1",
        },
      },
      boxShadow: {
        piatto: "0 18px 50px rgba(65, 51, 35, 0.12)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
