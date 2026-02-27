module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'logo-pic': "url('assets/logo/logo.png')",
        'hero-pic': "url('assets/images/hero_girl.png')",
      },
      backgroundSize: {
        '55%': '55%',
        '20%' : '20%',
        '80%': '80%'
      },
      backgroundPosition: {
        '65%-60%' : '65% 60%',
      }

    },
  },
  plugins: [],
}

