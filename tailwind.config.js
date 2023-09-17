module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '20px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px',
      xl: '1728px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#091242',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
