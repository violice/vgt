<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
  import { Container } from 'shared/components';
  import MainPage from 'pages/MainPage.svelte';

  import './global.css';
  import Stack from 'shared/components/Stack.svelte';

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Stack direction="column" spacing={4}>
    <header />
    <Container>
      <MainPage />
    </Container>
    <footer />
  </Stack>
</QueryClientProvider>
