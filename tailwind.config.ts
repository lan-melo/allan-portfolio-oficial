import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4a6cf7",
          dark: "#3a5be0",
        },
        ink: "#090e34",
        muted: "#959cb1",
        surface: "#f3f4fe",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 11px 41px -11px rgba(9, 14, 52, 0.10)",
        soft: "0 8px 40px -10px rgba(9, 14, 52, 0.10)",
      },
      maxWidth: {
        container: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
