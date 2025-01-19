import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'title': ['bree serif'],
      'helvetica': ['helvetica', 'sans-serif'],
    },
    extend: {
      colors: {
        main: '#404682',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        '128': '40rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
