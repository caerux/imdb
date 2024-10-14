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
    },
  },
  plugins: [],
};
export default config;
