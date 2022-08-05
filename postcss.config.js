const colors = rqeuire("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
