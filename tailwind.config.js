// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'class', // Enable dark mode toggling via 'class'
    theme: {
      extend: {
        colors: {
          black: '#0f0f0f',
          brand: {
            teal: '#2dd4bf',       // Tailwind teal-400
            purple: '#a78bfa',     // Tailwind purple-400
          }
        },
        fontFamily: {
          sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        },
        spacing: {
          'nav': '6rem', // Useful for scroll-margin
        },
        transitionDuration: {
          400: '400ms',
          600: '600ms',
        }
      },
    },
    plugins: [
      // Add Tailwind plugins here if needed:
      // require('@tailwindcss/forms'),
      // require('@tailwindcss/typography'),
    ],
  };
  