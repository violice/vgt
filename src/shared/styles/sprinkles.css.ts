import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

const sprinklesProperties = defineProperties({
  properties: {
    color: vars.colors,
    font: vars.fonts,
    fontSize: vars.fontSizes,
    fontWeight: vars.fontWeights,
    borderRadius: vars.radii,
    padding: vars.spaces,
    display: ['none', 'block', 'flex'],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-between'],
  },
});

export const sprinkles = createSprinkles(sprinklesProperties);

export type SX = Parameters<typeof sprinkles>[0];
