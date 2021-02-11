module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['serif'],
      mono: ['mono'],
    },
    extend: {
      margin: {
        one: '18px',
        two: '36px',
        big: '90px',
      },
      padding: {
        one: '18px',
        two: '36px',
        big: '90px',
        four: '72px',
        tooBig: '180px',
      },
      fontSize: {
        small: '0.844rem',
        'small-dt': '1.125rem',
        medium: '1.219rem',
        'medium-dt': '1.625rem',
        big: '1.625rem',
        'big-dt': '2.2625rem',
      },
      gridTemplateRows: {
        bottomFooter: '1fr auto',
      },
      boxShadow: {
        left: '0 0 50px 0 rgba(0, 0, 0, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
