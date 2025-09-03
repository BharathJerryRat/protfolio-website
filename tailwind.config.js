/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        surface: '#111827',
        text: '#f1f5f9',
        heading: '#e2e8f0',
        primary: '#3b82f6',
        secondary: '#06b6d4',
      },
    },
  },
  plugins: [],
}
