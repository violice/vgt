<script lang="ts">
  import { Box } from 'shared/components';
  import type { SX } from 'shared/styles/sprinkles.css';
  import { Direction, Spacing, stackRecipe } from './Stack.css';

  export let direction: Direction = 'row';
  export let spacing: Spacing = 0;
  export let sx: SX = {};
</script>

<Box className={stackRecipe({ direction, spacing })} {sx}>
  <slot />
</Box>
