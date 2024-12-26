/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#3498db", // Light mode primary
        secondary: "#2ecc71", // Light mode secondary
        accent: "#e74c3c", // Light mode accent
        background: "#ecf0f1", // Light mode background
        text: "#2c3e50", // Light mode text
        onHover: "#95a5a6", // Light mode hover

        darkPrimary: "#8e44ad", // Dark mode primary
        darkSecondary: "#c0392b", // Dark mode secondary
        darkAccent: "#f39c12", // Dark mode accent
        darkBackground: "#34495e", // Dark mode background
        darkText: "#ecf0f1", // Dark mode text
        darkOnHover: "#7f8c8d", // Dark mode hover
      },
    },
  },
  plugins: [],
};
