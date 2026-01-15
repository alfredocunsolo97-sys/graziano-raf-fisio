import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C5AA0',
        secondary: '#4ECDC4',
      },
    },
  },
  plugins: [],
} satisfies Config
