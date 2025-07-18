/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: ["bg-gradient-24"],
  theme: {
    extend: {
      // this isn't working on NavbarButton.js, consider deleting
      boxShadow: {
        // right bottom blur  spread color
        "lower-right-offset": "2px 4px 7px rgba(0, 0, 0, 0.95)",
      },
      colors: {
        pink: "#FF69B4",
        orange: "#FFA500",
      },

      fontFamily: {
        averia: "var(--font-averia)",
        nunito: "var(--font-nunito)",
        ptserif: "var(--font-pt-serif)",
        roboto: "var(--font-roboto)",
        varelaRound: "var(--font-varela-round-font)",
        youngSerif: "var(--font-young-serif)",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
