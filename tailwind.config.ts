import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      title: ["var(--font-bree-serif)", "serif"],
      helvetica: ['helvetica', 'sans-serif'],
      chauPhilemone: ["var(--font-chau-philomene-one)", "sans-serif"],
    },
    extend: {
      colors: {
        main: '#404682',
        background: "var(--background)",
        foreground: "var(--foreground)",
        footer: '#e7fb95'
      },
      height: {
        '128': '40rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
