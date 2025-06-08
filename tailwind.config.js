// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/Styles.css'],
  theme: {
    extend: {
      animation: {
        'slide-left-infinite': 'var(--animate-slide-left-infinite)',
      },
    },
  },
  plugins: [],
};
