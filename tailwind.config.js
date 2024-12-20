/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "title-xl": "96px",
        "sub-title-xl": "36px",
        "body-xl": "24px",
        "small-xl": "16px",
        "title-md": "72px",
        "sub-title-md": "27px",
        "body-md": "18px",
        "small-md": "12px",
      },
      fontFamily: {
        digifit: ["Digifit", "sans-serif"],
        IBMRegular: ["IBMRegular", "sans-serif"],
        IBMMedium: ["IBMMedium", "sans-serif"],
        IBMBold: ["IBMBold", "sans-serif"],
      },
      colors: {
        customGray: "#353434",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
