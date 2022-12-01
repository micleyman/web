const withOpacityValue = (variable) => {
  return `rgb(var(--${variable}) / <alpha-value>)`
}

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts,astro}'],
  theme: {
    extend: {}
  },
  plugins: []
}

module.exports = config
