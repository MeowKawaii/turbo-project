/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    `./src/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {
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
      maxWidth: {
        '1400': '1400px',
      }
    },
  },
  plugins: [],
}
