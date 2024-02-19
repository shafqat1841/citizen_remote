import type { Config } from "tailwindcss";

const colors = {
  dottedLine: "#D3D4DB",
};

const backgroundImage = {
  cardBackground: "url('../../public/assets/images/cardBackground.png')",
  // dottedLine: "linear-gradient(to right, #D3D4DB 33%, #D3D4DB 0%)",
  dottedLine: "url('../../public/assets/images/dottedLine.png')"
};

const backgroundSize = {
  dottedLineSize: "3px 1px",
};

const screens = {
  xs: "480px",
  lg2: "1200px",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      backgroundImage,
      screens,
    },
  },
  plugins: [],
};
export default config;
