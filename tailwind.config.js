/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(10px, -20px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-10px, 10px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
      },
    },
    screens: {
      xs: '480px',  // Extra small devices
      sm: '640px',  // Small devices
      md: '768px',  // Medium devices
      lg: '1024px', // Large devices
      xl: '1280px', // Extra large devices
      '2xl': '1536px', // Double extra large devices
    },
  },
  plugins: [],
}

