/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0a0a0a",
          800: "#1a1a1a",
          700: "#333333",
          500: "#666666",
          300: "#b3b3b3",
          200: "#d9d9d9",
          100: "#ececec",
          50: "#f5f5f5",
        },
        mint: {
          50: "#f1f7f3",
          100: "#dbe9de",
          200: "#bcd6c3",
          300: "#9ec1a7",
          400: "#7da98b",
          500: "#5e8e6f",
        },
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          '"Noto Sans JP"',
          "system-ui",
          "sans-serif",
        ],
        display: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          "sans-serif",
        ],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};
