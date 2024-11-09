/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "640px",
        laptop: "1460px",
        desktop: "1920px",
      },
      colors: {
        dim: "#e5e7eb",
        dimText: "#4b5563",
        white: "#fdfdfd",
        offWhite: "#F6F6F6",
        greenBtn: "#22c55e",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        flashLine1: {
          "0%": { left: "-100%" },
          "40%": { left: "100%" },
          "100%": { left: "100%" },
        },
        flashLine2: {
          "0%": { left: "-100%" },
          "60%": { left: "100%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-in-out",
        flashLine1: "flashLine1 5s infinite",
        flashLine2: "flashLine2 5s infinite",
      },
    },
  },
  plugins: [],
};