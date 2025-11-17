/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Local fonts (English / Khmer)
      fontFamily: {
        en: ['var(--font-en)', 'sans-serif'], // English font
        km: ['var(--font-km)', 'sans-serif'], // Khmer font
        sans: ['Inter', 'sans-serif'],        // fallback
      },

      // Colors
      colors: {
        background: "#0b1020",
        accent: "#00aaff",
        card: "#112240",
        text: "#ccd6f6",
        "text-secondary": "#8892b0",
      },
    },
  },
  plugins: [],
};
