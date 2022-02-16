module.exports = {
  content: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'utama': {DEFAULT:"#6C63FF"}
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textColor: ['checked'],
    },
  }
}
