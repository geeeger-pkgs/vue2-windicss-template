const colors = require('windicss/colors')
const lineClamp = require('windicss/plugin/line-clamp')
// const filters = require('windicss/plugin/filters')
const Typography = require('windicss/plugin/typography')
const { defineConfig } = require('windicss/helpers')
const plugin = require('windicss/plugin')

module.exports = defineConfig({
  extract: {
    include: [
      'index.html',
      'src/**/*.{vue,html,jsx,tsx,js}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
  scan: {
    dirs: ['src'],
    exclude: [
      'node_modules',
      '.git',
      'public/**/*',
      '*.template.html',
      'index.html',
    ],
    include: [],
  },
  transformCSS: 'pre',
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        rounded: '0 0 60px rgba(0, 0, 0, 0.3)',
        roundedSm: '0 0 16px rgba(0, 0, 0, 0.1)'
      },
      colors: {
        black: colors.black,
        white: colors.white,
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        gray: colors.gray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        dark: colors.dark,
        light: colors.light
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#8F9FB2',
            a: {
              'color': '#268AF7',
              '&:hover': {
                color: '#268AF7',
              },
            },
          },
        },
      }
    },
    // filter: {
    //   none: 'none',
    //   grayscale: 'grayscale(1)',
    //   invert: 'invert(1)',
    //   sepia: 'sepia(1)',
    // },
    // backdropFilter: {
    //   none: 'none',
    //   blur: 'blur(20px)',
    // },
  },
  // variants: {
  //   filter: ['responsive'],
  //   backdropFilter: ['responsive'],
  // },
  plugins: [
    lineClamp,
    // filters,
    Typography,
    plugin(({ addComponents }) => addComponents({
      '.adjust-none': {
        textSizeAdjust: 'none'
      },
      '.text-intro': {
        color: '#8F9FB2'
      },
      '.text-title': {
        color: '#2E384A'
      },
      '.text-active': {
        color: '#268AF7'
      },
      '.text-overflow': {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      '.safe-bottom': {
        paddingBottom: '20PX'
      }
    }))
  ],
})
