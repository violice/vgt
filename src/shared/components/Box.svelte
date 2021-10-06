<script lang="ts">
  import { sprinkles, SX } from 'shared/styles/sprinkles.css';

  export let className: string = '';
  export let sx: SX = {};
</script>

<div class={`${className} ${sprinkles(sx)}`}>
  <slot />
</div>
