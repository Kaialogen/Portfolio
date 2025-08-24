export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/Styles.css'],
  theme: {
    extend: {
      animation: {
        'slide-left-infinite': 'var(--animate-slide-left-infinite)',
      },
      colors: {
        'Cosmic-Black': '#0A0D0F',
        WhiteChalk: '#f8f8f8',
      },
    },
  },
  plugins: [],
};
