import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d10d74",
          150: "#d10d7426",
        },
        gray: {
          100: "#00000026",
          150: "#00000012",
          200: "#808080",
          250: "#00000029",
          350: "#656064",
          300: "#F2F2F2",
          500: "#4D4F53",
        },
        error: {
          100: "#D32F2F",
          150: "#FFB2B2",
        },
        success: {
          100: "#4caf50",
          150: "#b2dba1",
        },
      },
    },
    screens: {
      sm: "350px",
      md: "768px", // Default value
      lg: "1369px", // Default value
      xl: "1400px", // Default value
      "2xl": "1536px", // Default value
    },
  },
  plugins: [],
};
export default config;
