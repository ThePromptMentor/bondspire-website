
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bondspire Brand Colors
        'bond-blue': '#2B6EF2',
        'spire-pink': '#E338A4', 
        'gradient-purple': '#6D4CF2',
        'sky-tint': '#EEF5FF',
        'midnight-navy': '#0D1B3E',
        'slate-gray': '#6E7687',
        
        // Tailwind-compatible versions
        primary: {
          DEFAULT: '#2B6EF2', // Bond Blue
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#E338A4', // Spire Pink
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#6D4CF2', // Gradient Purple
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#EEF5FF', // Sky Tint
          foreground: '#6E7687', // Slate Gray
        },
        background: '#FFFFFF',
        foreground: '#0D1B3E', // Midnight Navy
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0D1B3E',
        },
        border: '#E2E8F0',
        input: '#F1F5F9',
        ring: '#2B6EF2',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'Arial', 'sans-serif'],
        'lato': ['Lato', 'Helvetica', 'sans-serif'],
        sans: ['Lato', 'Helvetica', 'sans-serif'],
        heading: ['Montserrat', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Desktop/Mobile responsive type scale
        'heading-1': ['clamp(36px, 4vw, 48px)', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['clamp(28px, 3.5vw, 36px)', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-3': ['clamp(24px, 2.8vw, 28px)', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-4': ['clamp(20px, 2.4vw, 24px)', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['clamp(16px, 1.8vw, 18px)', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['clamp(12px, 1.4vw, 14px)', { lineHeight: '1.5', fontWeight: '300' }],
      },
      screens: {
        'xs': '320px',
        'sm': '375px', 
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '96': '24rem',
        '128': '32rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      backgroundImage: {
        'bond-gradient': 'linear-gradient(135deg, #2B6EF2 0%, #6D4CF2 50%, #E338A4 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(43, 110, 242, 0.9) 0%, rgba(109, 76, 242, 0.9) 50%, rgba(227, 56, 164, 0.9) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'count-up': 'countUp 2s ease-out',
        'gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'bond': '0 4px 14px 0 rgba(43, 110, 242, 0.15)',
        'bond-lg': '0 8px 30px 0 rgba(43, 110, 242, 0.2)',
        'spire': '0 4px 14px 0 rgba(227, 56, 164, 0.15)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
