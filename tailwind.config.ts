import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: '#0D161F',
          deep: '#070C12',
          card: '#121F2C',
          light: '#1A2A3A',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(56, 181, 222, 0.25)',
        },
        paper: {
          DEFAULT: '#F4F7F9',
          light: '#FFFFFF',
          muted: '#E6EDF2',
          border: '#D3DEE5',
        },
        ink: {
          DEFAULT: '#101B24',
          light: '#233442',
          muted: '#52697A',
          subtle: '#8298A8',
        },
        signal: {
          lime: '#38B5DE', // Spaq Logo Cyan
          'lime-hover': '#24A2CB',
          'lime-dim': 'rgba(56, 181, 222, 0.15)',
          'lime-glow': 'rgba(56, 181, 222, 0.35)',
        },
        spaq: {
          cyan: '#38B5DE',
          'cyan-hover': '#24A2CB',
          'cyan-dim': 'rgba(56, 181, 222, 0.15)',
          gold: '#BA9C5B',
          'gold-light': '#CCA862',
          'gold-dim': 'rgba(186, 156, 91, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
} satisfies Config