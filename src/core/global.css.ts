import { globalStyle } from '@vanilla-extract/css';
import { vars } from 'shared/styles/theme.css';

globalStyle('html, body', {
  margin: 0,
  backgroundColor: vars.colors['gray.900'],
  color: vars.colors.white,
  fontFamily: vars.fonts.body,
  fontSize: vars.fontSizes.body,
});

globalStyle('a', {
  textDecoration: 'none',
  color: vars.colors.white,
});
