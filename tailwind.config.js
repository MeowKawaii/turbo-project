/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      danger: 'var(--color-danger)',
      btn_primary: {
        DEFAULT: 'var(--color-btn-primary)',
        hover: 'var(--color-btn-primary-hover)'
      },
    },
    extend: {
      maxWidth: {
        '1400': '1400px',
      }
    },
  },
  plugins: [],
}
