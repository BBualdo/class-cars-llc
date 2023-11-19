import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "200px",
      sm: "440px",
      md: "840px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {
      colors: {
        gold: "#efd69d",
        darkGrey: "#1c1c1c",
      },
      textShadow: {
        sm: "1px 1px 2px var(--tw-shadow-color)",
        DEFAULT: "2px 2px 4px var(--tw-shadow-color)",
        lg: "4px 4px 8px var(--tw-shadow-color)",
        xl: "4px 4px 12px var(--tw-shadow-color)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bmw: "url('/bmw-bg.jpg')",
        one: "url('/template-images/1.jpg')",
        two: "url('/template-images/2.jpg')",
        three: "url('/template-images/3.jpg')",
        four: "url('/template-images/4.jpg')",
        five: "url('/template-images/5.jpg')",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
