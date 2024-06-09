import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const baseColor = {
  accent: '#EBD8FF',
  'accent-content': '#808080',
  neutral: '#9966FF',
  'neutral-content': '#808080',
  'base-100': '#F7FAFC',
  'base-content': '#808080'
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primaryText: '#473D52',
      gray: '#9F9FA0',
      'gray-500': '#949494',
      'gray-400': '#808080',
      'gray-300': '#A7A7A7',
      'gray-200': '#F1F1FF',
      red: '#c0392b',
      'red-500': '#e74c3c'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  screens: {
    xs: '375px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
    xxxl: '1940px'
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...baseColor,
          primary: '#10010C',
          secondary: '#10010C'
        }
      }
    ]
  }
};
export default config;
