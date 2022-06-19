module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heroBg: "url('/images/heroBG.svg')",
        WorkBg: "url('/images/section2Bg.png')",
        AboutBg: "url('/images/section3Bg.png')",
        ContactBg: "url('/images/ContactBG.png')",
        FooterBg: "url('/images/FooterBG.png')",
      }),
      colors: {
        darkGray: "#292929",
        violet: "#A476E9",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
