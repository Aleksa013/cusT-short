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
        '70%': '70%'
      },
      backgroundPosition: {
        '65%-55%' : '65% 55%',
      }

    },
  },
  plugins: [],
}

