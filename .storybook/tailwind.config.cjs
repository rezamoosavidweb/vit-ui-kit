/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./workspace-preset')],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
