import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sanity/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      },
      colors: {
        // Aqualogic palette (from Aqualogic.pdf)
        aqualogic: {
          paper: '#FAFBFF',
          cyan: '#00B6DB',
          ink: '#0C2C3A',
          sky: '#6AC2D8'
        },
        // Sustec palette (from Sustec.pdf)
        sustec: {
          paper: '#FAFBFF',
          blue: '#0092D2',
          black: '#000000',
          green: '#71D35F'
        },
        // Shared grayscale (defined in both brand guideline docs)
        grey: {
          cloud: '#EDEFF7',
          smoke: '#D3D6E0',
          steel: '#BCBFCC',
          space: '#9DA2B3',
          graphite: '#6E7180',
          arsenic: '#40424D',
          phantom: '#1E1E24'
        }
      },
      maxWidth: {
        prose: '70ch'
      }
    }
  },
  plugins: []
};

export default config;
