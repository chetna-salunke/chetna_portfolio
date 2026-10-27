/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Bricolage Grotesque', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        // DARK MODE — deep midnight with warm rose/gold accents
        primary:  { DEFAULT: '#D9BF77', dark: '#BFA55F', light: '#E8DAB2' },  // soft rose
        accent:   { DEFAULT: '#C4B6A6', dark: '#A45A3D', light: '#8CF0D2' },   // warm gold
        dark: {
          bg:    '#1C130D',   // deep midnight
          card:  '#2A1D14',   // card surface
          nav:   '#140D08',
          muted: '#3D2B1E',
        },
        // LIGHT MODE — creamy warm white with blush
        light: {
          bg:   '#E8DAB2',   // warm stone — clearly different from white cards
          card: '#FFFFFF',
          text: '#2A1A10',   // deep aubergine — not pure black
          muted:'#D9C9A0',
          border:'#6B4226',
        },
        'dark-text':  '#E8DAB2',
        'light-text': '#2A1A10',
        rose: '#D9BF77',
        gold: '#C4B6A6',
        lavender: '#E8DAB2',
      },
      animation: {
        'fade-up':       'fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':       'fadeIn 0.6s ease forwards',
        'fade-left':     'fadeLeft 0.75s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-right':    'fadeRight 0.75s cubic-bezier(0.22,1,0.36,1) forwards',
        'blink':         'blink 1.1s step-end infinite',
        'float':         'float 7s ease-in-out infinite',
        'float-slow':    'float 10s ease-in-out infinite',
        'glow-pulse':    'glowPulse 4s ease-in-out infinite',
        'glow-pulse-2':  'glowPulse 5s ease-in-out infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'spin-slow':     'spin 12s linear infinite',
        'bounce-slow':   'bounceSlow 3s ease-in-out infinite',
        'slide-up':      'slideUp 0.5s ease forwards',
        'marquee':       'marquee 20s linear infinite',
      },
      keyframes: {
        fadeUp:     { '0%': { opacity:'0', transform:'translateY(40px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        fadeIn:     { '0%': { opacity:'0' }, '100%': { opacity:'1' } },
        fadeLeft:   { '0%': { opacity:'0', transform:'translateX(-40px)' }, '100%': { opacity:'1', transform:'translateX(0)' } },
        fadeRight:  { '0%': { opacity:'0', transform:'translateX(40px)' }, '100%': { opacity:'1', transform:'translateX(0)' } },
        blink:      { '0%,100%': { opacity:'1' }, '50%': { opacity:'0' } },
        float:      { '0%,100%': { transform:'translateY(0px) rotate(0deg)' }, '50%': { transform:'translateY(-18px) rotate(2deg)' } },
        glowPulse:  { '0%,100%': { opacity:'0.3', transform:'scale(1)' }, '50%': { opacity:'0.7', transform:'scale(1.08)' } },
        shimmer:    { '0%': { backgroundPosition:'-200% center' }, '100%': { backgroundPosition:'200% center' } },
        bounceSlow: { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-8px)' } },
        slideUp:    { '0%': { opacity:'0', transform:'translateY(16px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        marquee:    { '0%': { transform:'translateX(0%)' }, '100%': { transform:'translateX(-50%)' } },
      },
      backgroundImage: {
        'gradient-rose-gold': 'linear-gradient(135deg, #D9BF77 0%, #C4B6A6 100%)',
        'gradient-dark-card': 'linear-gradient(135deg, #2A1D14 0%, #3D2B1E 100%)',
        'gradient-mesh':      'radial-gradient(at 40% 20%, #D9BF7722 0px, transparent 50%), radial-gradient(at 80% 0%, #C4B6A622 0px, transparent 50%), radial-gradient(at 0% 50%, #E8DAB222 0px, transparent 50%)',
      },
      boxShadow: {
        'rose':     '0 0 40px rgba(217,191,119,0.25)',
        'gold':     '0 0 40px rgba(196,182,166,0.2)',
        'card-dark':'0 4px 32px rgba(0,0,0,0.5)',
        'glow-rose':'0 0 60px rgba(217,191,119,0.15)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
