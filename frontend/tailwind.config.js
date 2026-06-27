/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#050816',
          panel: 'rgba(15, 23, 42, 0.72)',
          line: 'rgba(148, 163, 184, 0.2)',
          cyan: '#22d3ee',
          green: '#34d399',
          amber: '#f59e0b',
          pink: '#fb7185'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.16)'
      }
    }
  },
  plugins: []
};
