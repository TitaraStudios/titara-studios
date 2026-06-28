/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Brand palette
        primary: {
          DEFAULT: '#6C5CE7',
          50: '#F1EFFD',
          100: '#E0DBFB',
          200: '#C2B8F6',
          300: '#A394F2',
          400: '#8571ED',
          500: '#6C5CE7',
          600: '#4733DE',
          700: '#3525B0',
          800: '#271B82',
          900: '#191254',
        },
        secondary: {
          DEFAULT: '#00D2FF',
          400: '#33DBFF',
          500: '#00D2FF',
          600: '#00A8CC',
        },
        accent: {
          DEFAULT: '#FFD93D',
          400: '#FFE066',
          500: '#FFD93D',
          600: '#E6BE00',
        },
        // Surfaces
        ink: '#0F172A', // background
        card: '#1E293B', // cards
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(108, 92, 231, 0.55)',
        'glow-cyan': '0 0 40px -8px rgba(0, 210, 255, 0.5)',
        card: '0 10px 30px -12px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 24px 60px -18px rgba(108, 92, 231, 0.45)',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 50% 0%, rgba(108,92,231,0.18), transparent 60%)',
        'brand-gradient': 'linear-gradient(120deg, #6C5CE7 0%, #00D2FF 100%)',
        'accent-gradient': 'linear-gradient(120deg, #6C5CE7 0%, #FFD93D 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-16px) translateX(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
