<script lang="ts">
  import { getGameBySlug } from 'shared/api/games';
  import type { Game } from 'shared/types/models';
  import async from 'shared/utils/async';

  export let slug: string;

  const asyncResult = async<Game>(() => getGameBySlug(slug));
</script>

{#if $asyncResult.isLoading}
  Loading...
{:else if $asyncResult.data}
  <h1>{$asyncResult.data.name}</h1>
  <img src={$asyncResult.data.image} alt={$asyncResult.data.slug} />
{/if}
