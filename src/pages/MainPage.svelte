<script lang="ts">
  import { GameCardsList } from 'features/games';
  import { getGames } from 'shared/api/games';
  import type { Game } from 'shared/types/models';
  import async from 'shared/utils/async';

  let page = 1;
  const asyncResult = async<Array<Game>>(getGames, { initialData: [], keepPreviousData: true });

  const onLoadMore = () => {
    page++;
    asyncResult.refetch({ page, prevData: $asyncResult.data });
  };
</script>

<GameCardsList
  isGamesLoading={$asyncResult.isLoading}
  games={$asyncResult.data}
  on:loadMore={onLoadMore}
/>
