<script lang="ts">
  import { buttonStyle } from './Button.css';

  export let disabled = false;
</script>

<button class={buttonStyle} {disabled} on:click>
  <slot />
</button>
