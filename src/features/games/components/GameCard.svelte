<script lang="ts">
  import { Box } from 'shared/components';
  import { imageStyle, rootStyle } from './GameCard.css';

  export let name: string;
  export let image: string;
</script>

<Box className={rootStyle}>
  <img class={imageStyle} src={image} alt={name} />
  <Box sx={{ fontSize: 'lg' }}>{name}</Box>
</Box>
