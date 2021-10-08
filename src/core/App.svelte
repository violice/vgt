<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

  import { IndexPage, GamePage } from 'pages';
  import { Container, Stack } from 'shared/components';

  import './global.css';

  const queryClient = new QueryClient();
</script>

<Router>
  <QueryClientProvider client={queryClient}>
    <Stack direction="column" spacing={4}>
      <header />
      <Container>
        <Route path="/games/:slug" let:params>
          <GamePage slug={params.slug} />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Container>
      <footer />
    </Stack>
  </QueryClientProvider>
</Router>
