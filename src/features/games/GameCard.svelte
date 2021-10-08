<script lang="ts">
  import { Link } from 'svelte-routing';
  import { Box } from 'shared/components';
  import { imageStyle, rootStyle } from './GameCard.css';

  export let name: string;
  export let image: string;
  export let slug: string;
</script>

<Link to={`/games/${slug}`}>
  <Box className={rootStyle}>
    <img class={imageStyle} src={image} alt={name} />
    <Box sx={{ fontSize: 'lg' }}>{name}</Box>
  </Box>
</Link>
