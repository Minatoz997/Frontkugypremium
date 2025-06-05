/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'wave': 'wave 20s linear infinite',
        'wave-slow': 'wave 25s linear infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'matrix-text': 'matrix-text 20s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'cyber-pulse': 'cyber-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: 1,
            filter: 'brightness(1) blur(0px)',
          },
          '50%': { 
            opacity: 0.6,
            filter: 'brightness(1.2) blur(4px)',
          },
        },
        'matrix-text': {
          '0%': { 
            textShadow: '0 0 0 #0f0',
            transform: 'translateY(0)',
          },
          '50%': {
            textShadow: '0 0 10px #0f0, 0 0 20px #0f0',
            transform: 'translateY(-5px)',
          },
          '100%': {
            textShadow: '0 0 0 #0f0',
            transform: 'translateY(0)',
          },
        },
        'cyber-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px #4f46e5, 0 0 40px #4f46e5',
          },
          '50%': {
            boxShadow: '0 0 40px #4f46e5, 0 0 60px #4f46e5',
          },
        },
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
        anime: ['Noto Sans JP', 'sans-serif'],
        futuristic: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}