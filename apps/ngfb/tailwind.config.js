module.exports = {
  mode: 'jit',
  prefix: '',
  purge: {
    content: ['**/*.html', '**/*.component.ts', './apps/frontend/safelist.txt'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      gridAutoRows: {
        0: '0',
      },
      colors: {
        alpha: {
          light: '#3b5998',
          dark: '#18191a',
        },
        beta: {
          light: '#8b9dc3',
          dark: '#242526',
        },
        gamma: {
          light: '#dfe3ee',
          dark: '#3a3b3c',
        },
        psi: {
          light: '#f7f7f7',
          dark: '#e4e6eb',
        },
        omega: {
          light: '#ffffff',
          dark: '#b0b3b8',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
