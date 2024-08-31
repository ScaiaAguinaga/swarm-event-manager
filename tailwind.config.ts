import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BB86FC",
        "primary-hover": "#BB86FCD9",
        secondary: "#03DAC6",
        "secondary-hover": "#03DAC6D9",
        "background-color": "#121212",
        base: "#1E1E1E",
        error: "CF6679",
      },
    },
  },
  plugins: [],
};
export default config;
