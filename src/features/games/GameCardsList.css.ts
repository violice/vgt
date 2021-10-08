import { style } from "@vanilla-extract/css";
import { breakpoints, vars } from "shared/styles/theme.css";

export const rootStyle = style({
  flex: 1,
  overflow: 'auto',
});

export const cardsGridStyle = style({
  display: 'grid',
  gap: vars.spaces[4],
  marginBottom: vars.spaces[4],
  '@media': {
    [`${breakpoints.md}`]: {
      gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))'
    },
    [`${breakpoints.lg}`]: {
      gridTemplateColumns: 'repeat(3, minmax(0px, 1fr))'
    },
    [`${breakpoints.xl}`]: {
      gridTemplateColumns: 'repeat(4, minmax(0px, 1fr))'
    }
  },
});
