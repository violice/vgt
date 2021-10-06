import { style } from '@vanilla-extract/css';
import { vars } from 'shared/styles/theme.css';

export const rootStyle = style({
  backgroundColor: vars.colors['gray.800'],
  borderRadius: vars.radii.md,
  padding: vars.spaces[4],
  ':hover': {
    cursor: 'pointer',
    backgroundColor: vars.colors['gray.700'],
  },
});

export const imageStyle = style({
  display: 'block',
  width: '100%',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
  objectPosition: 'top',
  marginBottom: vars.spaces[2],
  borderRadius: vars.radii.md,
});
