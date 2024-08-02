import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f7f6ff",
          100: "#eeecfe",
          200: "#d5d1fd",
          300: "#bbb5fb",
          400: "#fff",
          500: "#656524",
          600: "#6f3134",
          700: "#85664c",
          800: "#5f4a37",
          900: "#6f4520",
        },
      }
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
