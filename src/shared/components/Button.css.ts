import { style } from '@vanilla-extract/css';
import { vars } from 'shared/styles/theme.css';

export const buttonStyle = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.white,
  border: 'none',
  textTransform: 'uppercase',
  backgroundColor: vars.colors['purple.500'],
  padding: `${vars.spaces[4]} ${vars.spaces[8]}`,
  borderRadius: vars.radii.md,
  ':disabled': {
    opacity: 0.75,
  },
  ':hover': {
    cursor: 'pointer',
    backgroundColor: vars.colors['purple.600'],
  },
  ':active': {
    backgroundColor: vars.colors['purple.700'],
  },
  selectors: {
    '&:disabled:hover': {
      cursor: 'default',
      backgroundColor: vars.colors['purple.500'],
    },
  },
});
