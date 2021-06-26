module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["Bebas Neue"],
    },
    extend: {
      colors: {
        butterflyBlush: "#654ea3",
        kobi: "#eaafc8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
