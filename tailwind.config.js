/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #452e5e, #64527b, #847799, #a69eb8, #cbc7d6, #d0c9d7, #d5cbd7, #dacdd7, #c6a7af, #af8481, #8f6650, #644e23);',
      },
    },
  },
  plugins: [],
}
