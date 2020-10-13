/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      navy: '#001333',
      white: '#ffffff',
      black: '#000000',
      gray: {
        100: '#989898',
        200: '#f1f1f1'
      },
      red: '#cc3c49'
    },
    fontFamily: {
      body: ['Cinzel', 'serif'],
      cinzel: '"Cinzel"',
      scriptina: '"Scriptina"'
    },
    fontSize: {
      xxs: '.5rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      8: '6rem',
      9: '7rem',
      10: '8rem',
      11: '9rem'
    },
    maxHeight: theme => ({
      ...theme('spacing'),
      90: '90%'
    }),
    maxWidth: theme => ({
      ...theme('spacing'),
      initial: 'initial'
    }),
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      spacing: {
        7: '2rem',
        8: '3rem',
        9: '4rem',
        10: '5rem'
      },
      letterSpacing: {
        distanced: '1rem'
      }
    }
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus', 'important'],
    letterSpacing: ['responsive', 'hover', 'focus', 'important'],
    textColor: ['responsive', 'hover', 'focus', 'important'],
    borderWidth: ['responsive', 'hover', 'focus', 'important'],
    borderColor: ['responsive', 'hover', 'focus', 'important'],
    width: ['responsive', 'hover', 'focus', 'important'],
    margin: ['responsive', 'hover', 'focus', 'important'],
    zIndex: ['responsive', 'hover', 'focus', 'important']
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls((decl) => {
            decl.important = true
          })
        })
      })
    }
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
