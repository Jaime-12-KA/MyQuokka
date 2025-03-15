/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B4AFF",
        "primary-light": "rgba(123, 74, 255, 0.1)",
        "neutral-1": "#F5F5F7",
        "neutral-2": "#DDDDDD",
        "neutral-3": "#666666",
        "neutral-4": "#1A1A1A"
      },
      borderRadius: {
        'card': '20px',
      },
      spacing: {
        'section': '60px',
        'card': '24px',
      },
    },
  },
  plugins: [],
}; 