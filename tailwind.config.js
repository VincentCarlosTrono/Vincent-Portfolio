module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heroBg: "url('/images/heroBg1.png')",
        WorkBg: "url('/images/section2Bg.png')",
        AboutBg: "url('/images/section3Bg.png')",
        ContactBg: "url('/images/section4Bg.png')",
        FooterBg: "url('/images/footerImage.png')",
      }),
      colors: {
        darkGray: "#292929",
        violet: "#A476E9",
        darkOrange: "#FF7C5F",
      },
      fontFamily: {
        title: ["Poppins"],
        body: ["Rubik"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
