import { style, globalStyle, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from 'shared/styles/theme.css';

const base = style({ display: 'flex' });

const direction = styleVariants({
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
});

const spacing = styleVariants(vars.spaces, space => ({
  gap: space,
}));

export const stackRecipe = recipe({
  base,
  variants: {
    direction,
    spacing,
  },
});

export type Direction = keyof typeof direction;

export type Spacing = keyof typeof spacing;

globalStyle(`${base} > *`, { flex: '1 1 0' });
