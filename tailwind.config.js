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
      fontFamily: {
        'display': ['"Times New Roman"', 'KaiTi'],
        'body': ['"Times New Roman"', 'KaiTi'],
      },
      backgroundImage: {
        'letter-paper': "url('~/assets/bg/letter-paper.png')",
        "eduhk-vision": "url('~/assets/bg/eduhk-vision.png')",
        'harvard-img1': "url('~/assets/bg/photo_1.jpg')",
        'harvard-img2': "url('~/assets/bg/photo_2.jpg')",
      },
      colors: {
        'cover-left': '#c56c70',
        'cover-right': '#c1daba',
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

