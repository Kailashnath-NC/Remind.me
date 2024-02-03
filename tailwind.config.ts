import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "app-lg": "calc(70% - 10rem)",
      },
      colors: {
        default: "#8D8268",
        primary: "#D4D5B1",
        secondary: "#C8B27E",
        danger: "#E46767",
      },
    },
  },
  plugins: [],
};
export default config;
