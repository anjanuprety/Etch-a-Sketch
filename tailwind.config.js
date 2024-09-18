/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left top, #2f598a, #2f547d, #304e70, #314963, #314357, #364759, #3b4b5c, #404f5e, #4c5f70, #577083, #638196, #6f93a9)',
      },
      keyframes: {
        gradientAnimation: {
          '0%': {
            backgroundImage: 'linear-gradient(to left top, #2f598a, #2f547d, #304e70, #314963, #314357, #364759, #3b4b5c, #404f5e, #4c5f70, #577083, #638196, #6f93a9)',
            backgroundSize: '300% 300%',
            backgroundPosition: '0% 0%',
          },
          '50%': {
            backgroundImage: 'linear-gradient(to left top, #6f93a9, #638196, #577083, #4c5f70, #404f5e, #3b4b5c, #364759, #314357, #314963, #304e70, #2f547d, #2f598a)',
            backgroundSize: '300% 300%',
            backgroundPosition: '100% 100%',
          },
          '100%': {
            backgroundImage: 'linear-gradient(to left top, #2f598a, #2f547d, #304e70, #314963, #314357, #364759, #3b4b5c, #404f5e, #4c5f70, #577083, #638196, #6f93a9)',
            backgroundSize: '300% 300%',
            backgroundPosition: '0% 0%',
          },
        },
      },
      animation: {
        gradient: 'gradientAnimation 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}