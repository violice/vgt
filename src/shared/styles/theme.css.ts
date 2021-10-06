import { createGlobalTheme } from '@vanilla-extract/css';

const generateSpaces = (base: number) => {
  let spaces: Record<number, string> = {};
  for (let i = 0; i <= 10; i++) {
    spaces[i] = `${i * base}px`;
  }
  return spaces;
};

export const vars = createGlobalTheme(':root', {
  colors: {
    white: '#fff',
    black: '#000',
    'purple.500': '#805AD5',
    'purple.600': '#6B46C1',
    'purple.700': '#553C9A',
    'gray.900': '#171717',
    'gray.800': '#262626',
    'gray.700': '#3F3F46',
  },
  fonts: {
    body: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif',
  },
  fontSizes: {
    body: '16px',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.5rem',
  },
  fontWeights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  radii: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
  sizes: {
    container: {
      sm: '30rem',
      md: '48rem',
      lg: '62rem',
      xl: '80rem',
      '2xl': '96rem',
    },
  },
  spaces: generateSpaces(4),
});

export const breakpoints = {
  sm: 'screen and (min-width: 30rem)',
  md: 'screen and (min-width: 48rem)',
  lg: 'screen and (min-width: 62rem)',
  xl: 'screen and (min-width: 80rem)',
  '2xl': 'screen and (min-width: 96rem)',
};
