<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { Box, Button } from 'shared/components';
  import type { Game } from 'shared/types/models';
  import GameCard from './GameCard.svelte';
  import { cardsGridStyle, rootStyle } from './GameCardsList.css';

  export let isGamesLoading: boolean = false;
  export let games: Array<Game> = [];

  onMount(() => document.addEventListener('scroll', onScroll));

  const dispatch = createEventDispatcher();

  const onScroll = (e: Event) => {
    let target = e.target as Document;
    if (target && target.scrollingElement) {
      const offset =
        target.scrollingElement.scrollHeight -
        target.scrollingElement.clientHeight -
        target.scrollingElement.scrollTop;
      if (offset <= 100 && !isGamesLoading) {
        dispatch('loadMore');
      }
    }
  };

  onDestroy(() => document.removeEventListener('scroll', onScroll));
</script>

<div class={rootStyle} on:scroll={onScroll}>
  <div class={cardsGridStyle}>
    {#each games as game}
      <GameCard name={game.name} image={game.image} />
    {/each}
  </div>
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Button disabled={isGamesLoading} on:click={() => dispatch('loadMore')}>
      {isGamesLoading ? 'Loading...' : 'Load more'}
    </Button>
  </Box>
</div>
