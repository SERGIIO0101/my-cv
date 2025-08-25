export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "var(--color-1)",
      dark: "var(--color-2)",
      light: "var(--color-3)",
      muted: "var(--color-4)",
      accent: "var(--color-5)",
    },
  },
},
  plugins: [],
}
