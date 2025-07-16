/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // right bottom blur  spread color
        "lower-right-offset": "2px 4px 7px rgba(0, 0, 0, 0.95)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-24": "linear-gradient(24deg, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      fontFamily: {
        averia: "var(--font-averia)",
        nunito: "var(--font-nunito)",
        ptserif: "var(--font-pt-serif)",
        roboto: "var(--font-roboto)",
        varelaRound: "var(--font-varela-round)",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
