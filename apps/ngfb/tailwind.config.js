module.exports = {
  mode: 'jit',
  prefix: '',
  purge: {
    content: ['**/*.html', '**/*.component.ts', './apps/frontend/safelist.txt'],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#1db954',
        sliderRail: '#535353',
        sliderTrack: '#b3b3b3',
      },
    },
  },
  variants: {},
  plugins: [],
};
