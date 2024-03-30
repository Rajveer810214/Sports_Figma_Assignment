/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Define your light mode colors here
        light: {
          primary: '#ffffff', // Example light mode primary color
          secondary: '#f7f7f7', // Example light mode secondary color
          // Add more light mode colors as needed
        },
        // Define your dark mode colors here
        dark: {
          primary: '#000000', // Example dark mode primary color
          secondary: '#1a1a1a', // Example dark mode secondary color
          // Add more dark mode colors as needed
        },
      },
    },
  },
  plugins: [],
}
