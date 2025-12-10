/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00F176",
          light: "#4DFFAA",
          dark: "#00B85A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        base: ["Inter", "sans-serif"],
      },
      boxShadow: {
        brand: "0 0 40px rgba(0, 241, 118, 0.25)",
        card: "0 10px 40px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
