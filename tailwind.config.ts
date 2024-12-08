import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary1: "#FF9F0D",
        secondary1: "#0D0D0DF2"
      },
  		fontFamily: {
  			Helvetica: ['Helvetica'],
  			HelveticaBold: ['Helvetica-Bold'],
  			GreatVibes: ['GreatVibes'],
  			Inter400: ['Inter400'],
        Inter700: ['Inter700']
  		}
    },
  },
  plugins: [],
} satisfies Config;
