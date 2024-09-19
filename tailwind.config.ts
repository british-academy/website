import type { Config } from "tailwindcss"
import typographyPlugin from "@tailwindcss/typography"

export default {
  darkMode: "class",

  content: ["./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      colors: {
        // dark: "#073763",
        primary: {
          DEFAULT: "#e69138",
          50: "#fdf8ef",
          100: "#fbefd9",
          200: "#f6ddb2",
          300: "#f1c680",
          400: "#eaa44d",
          500: "#e69138",
          600: "#d67120",
          700: "#b1571d",
          800: "#8e451e",
          900: "#723b1c",
          950: "#3e1c0c",
        },
        secondary: {
          DEFAULT: "#6fa8dc",
          50: "#f2f7fc",
          100: "#e1edf8",
          200: "#cadff3",
          300: "#a6cbea",
          400: "#6fa8dc",
          500: "#5c93d5",
          600: "#487ac8",
          700: "#3e67b7",
          800: "#375596",
          900: "#314877",
          950: "#222e49",
        },
        dark: {
          DEFAULT: "#073763",
          50: "#eff7ff",
          100: "#dfeeff",
          200: "#b7dfff",
          300: "#78c6ff",
          400: "#30a9ff",
          500: "#058ef2",
          600: "#0070cf",
          700: "#0058a7",
          800: "#024c8a",
          900: "#073763",
          950: "#05284c",
        },
        accent: {
          DEFAULT: "#87b23f",
          50: "#f5f9ec",
          100: "#eaf2d5",
          200: "#d4e6b0",
          300: "#b8d581",
          400: "#9cc259",
          500: "#87b23f",
          600: "#62842c",
          700: "#4b6625",
          800: "#3e5222",
          900: "#364621",
          950: "#1b260d",
        },
      },
    },
  },

  plugins: [typographyPlugin],
} satisfies Config
