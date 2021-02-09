module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js',
    './components/**/*.jsx',
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
      fontSize: {
        small: '0.844rem',
        'small-dt': '1.125rem',
        medium: '1.219rem',
        'medium-dt': '1.625rem',
        big: '1.625rem',
        'big-dt': '2.2625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
