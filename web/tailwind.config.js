module.exports = {
    purge: [
      // Use *.tsx if using TypeScript
      './pages/**/*.js',
      './components/**/*.js'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily:  {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'serif': ['serif'],
        'mono': ['mono']
      },
        extend: {
          
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }