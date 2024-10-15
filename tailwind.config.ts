import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobileL: "425px",
      mobileM: "375px",
      mobileS: "320px",
      sm: "640px",
      tablet: "768px",
      md: "900px",
      lg: "1000px",
      xl: "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#394B61",
        deepBlue: "#1F2A3C",
        lightBlue: "#00E0FF",
      },
      keyframes: {
        expandVertical: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        collapseVertical: {
          "0%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        expandVertical: "expandVertical 300ms ease-out forwards",
        collapseVertical: "collapseVertical 300ms ease-in forwards",
        fadeIn: "fadeIn 300ms ease-out forwards",
        fadeOut: "fadeOut 300ms ease-in forwards",
      },
    },
  },
  plugins: [],
};
export default config;
