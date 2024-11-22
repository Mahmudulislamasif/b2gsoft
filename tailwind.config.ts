import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          lightPurple: '#F5F3FF',
          lavender: '#8F71E1',
          deepPurple: '#581FC1',
          gray: '#646464',
          white: '#FFFFFF',
          translucentPurple: '#6441C2E5',
          darkGray: '#1D1D1D',
          violet: '#7E53D4',
          black: '#000000',
          lightGray: '#E8E8E8',
          royalPurple: '#2F1C59',
          softLavender: '#ECE9FE',
          yellow: '#FFCF11',
          lightLilac: '#EEECFB',
          deepGray:'#646464',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
