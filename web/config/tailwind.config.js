/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue-silver':
          'linear-gradient(to bottom right, #f8fafc, #bae6fd )',
      },
    },
  },
  plugins: [],
}
