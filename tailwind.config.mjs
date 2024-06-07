/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "718px",
      // => @media (min-width: 768px) { ... }
      lg2: "940px",

      lg: "990px",
      // => @media (min-width: 1024px) { ... }

      xl: "1069px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1350px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
