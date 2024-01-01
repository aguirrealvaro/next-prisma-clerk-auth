/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1280px" },
      md: { max: "992px" },
      sm: { max: "768px" },
      xs: { max: "480px" },
    },
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",

        "border-primary": "var(--border-primary)",
        "hover-primary": "var(--hover-primary)",

        "text-heading": "var(--text-heading)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        "disabled-primary": "var(--disabled-primary)",
        "disabled-secondary": "var(--disabled-secondary)",
      },
      fontFamily: {
        heading: "var(--font-inter)",
        body: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
