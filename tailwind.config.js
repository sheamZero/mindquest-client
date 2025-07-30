/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["lora", "serif"],
      },
      colors: {
        primary: "#FFFFFF",
        card: "#FAF9F6", //card s or bg
        accent: "#FFB23F", //btn links
        paragraph: "#5E5E5E",
        heading: "#2D3142",
        // dark
        primaryDark: "#1A1A1A",
        cardDark: "#2A2A2E",
        accentDark: "#FFA500",
        paragraphDark: "#C4C4C4",
        headingDark: "#F0F0F0",
      },
    },
  },
  plugins: [],
}

