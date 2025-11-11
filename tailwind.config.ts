import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zai: {
          blue: "#38bdf8",
          dark: "#0f172a",
        },
      },
    },
  },
} satisfies Config;
