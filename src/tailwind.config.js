module.exports = {
  theme: {
    extend: {
      inset: {
        16: '4rem',
        22: '5.5rem',
        24: '6rem',
        32: '8rem'
      },
      boxShadow: {
        md: '0 0 5px rgba(0,0,0,.02),0 5px 22px -8px rgba(0,0,0,.1)'
      },
      colors: {
        'blue-500': '#139ce7'
      },
      maxHeight: {
        '(screen-32)': 'calc(100vh - 8rem)'
      }
    }
  },
  variants: {},
  plugins: []
}
