module.exports = {
  purge: {
    content: [
      // Use *.tsx if using TypeScript
      './pages/**/*.js',
      './components/map/**/*.js',
      './components/**/*.js',
      './node_modules/react-alice-carousel/*',
      './node_modules/react-zoom-pan-pinch/*',
    ],
    options: {
      safelist: ['bg-Zentralität', 'bg-Wohnformen', 'bg-Ressourcen'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['serif'],
      mono: ['mono'],
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
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
      colors: {
        Zentralität: '#fac300',
        Ressourcen: '#699673',
        Wohnformen: '#699bbe',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
