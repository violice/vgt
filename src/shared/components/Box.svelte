<script lang="ts">
  import { Div, Span } from 'svelte-elements';
  import { sprinkles, SX } from 'shared/styles/sprinkles.css';

  export let className: string = '';
  export let sx: SX = {};
  export let as: 'div' | 'span' = 'div';

  let root: any;

  $: createElement(as);

  const createElement = (tagName: typeof as) => {
    switch (tagName) {
      case 'span':
        root = Span;
        break;
      case 'div':
      default:
        root = Div;
        break;
    }
  };
</script>

{#if root}
  <svelte:component this={root} class={`${className} ${sprinkles(sx)}`}>
    <slot />
  </svelte:component>
{/if}
