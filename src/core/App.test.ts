import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import App from './App.svelte';

describe('<App>', () => {
  it('renders required text', () => {
    const { getByText } = render(App);
    const element = getByText(/vanilla extract test/i);
    expect(document.body.contains(element));
  });
});
