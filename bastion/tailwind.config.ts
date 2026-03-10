import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        fond: {
          DEFAULT: '#E8EBEF',
          alt: '#D8DDE3',
          surface: '#F0F2F5',
        },
        primary: {
          DEFAULT: '#2B3840',
          light: '#3E5060',
          dark: '#1A252D',
        },
        secondary: {
          DEFAULT: '#1565C0',
          light: '#1E88E5',
          dark: '#0D47A1',
        },
        accent: {
          DEFAULT: '#0D9488',
          light: '#14B8A6',
          dark: '#0F766E',
        },
        texte: {
          DEFAULT: '#171E26',
          muted: '#5E6B77',
          faint: '#808B95',
        },
        bordure: {
          DEFAULT: '#B8BFC8',
          light: '#D0D6DC',
          dark: '#9AA3AE',
        },
      },
    },
  },
} satisfies Config
