/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    extend: {
      height: {
        '1.1-full': '110%',
        '2-full': '200%'
      },
      width: {
        '1/11': '9.090909%',
        '10/11': '90.909091%',
      },
      padding: {
        '73': '18.25rem',
      },
      fontFamily: {
        'display': ['"Times New Roman"', 'NSimSun'],
        'body': ['"Times New Roman"', 'NSimSun'],
      },
      backgroundImage: {
        'letter-paper': "url('/bg/letter-paper.png')",
        'harvard-img1': "url('/bg/photo_1.jpg')",
        'harvard-img2': "url('/bg/photo_2.jpg')",
      },
      colors: {
        'cover-left': '#c56c70',
        'cover-right': '#c1daba',
        'collabor-item': '#f9f9f9',
        'footer-bg': '#d29c9c',
        'tabs-header': '#f3f4f6',
        'nav-bg': '#ffffff',
        'pdf-top': '#7a2b2b',
        'pdf-middle': '#a12c2c',
        'pdf-bottom': '#7e3636',
      },
      borderRadius: {
        'edge': '1rem',
      },
      borderImage: {
        'gradient-border': 'linear-gradient(to right, #c06e74, #c1daba) 1',
      },
      boxShadow: {
        'blurred-edge': '0 0 10px 5px rgba(192, 110, 116, 0.5)',
      },
    },
  },
  plugins: [],
}

