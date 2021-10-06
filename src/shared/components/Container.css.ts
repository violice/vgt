import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from 'shared/styles/theme.css';

const base = style({ margin: '0 auto' });

const padding = styleVariants(vars.spaces, space => ({
  paddingLeft: space,
  paddingRight: space,
}));

export const maxWidth = styleVariants(vars.sizes.container, containerSize => ({
  maxWidth: containerSize,
}));

export const containerRecipe = recipe({
  base,
  variants: {
    padding,
    maxWidth,
  },
});

export type Padding = keyof typeof padding;

export type MaxWidth = keyof typeof maxWidth;
