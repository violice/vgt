<script lang="ts">
  import { Box } from 'shared/components';
  import type { SX } from 'shared/styles/sprinkles.css';
  import { containerRecipe, MaxWidth, Padding } from './Container.css';

  export let maxWidth: MaxWidth = '2xl';
  export let padding: Padding = 4;
  export let sx: SX = {};
</script>

<Box className={containerRecipe({ maxWidth, padding })} {sx}>
  <slot />
</Box>
