/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626', // Màu đỏ chính thương hiệu Đông Dương
          700: '#b91c1c', // Đỏ đô sang trọng
          800: '#991b1b', // Đỏ đậm quý phái
          900: '#7f1d1d',
          950: '#450a0a',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(220, 38, 38, 0.15)',
        'luxury-lg': '0 20px 40px -10px rgba(220, 38, 38, 0.25)',
      }
    },
  },
  plugins: [],
};
