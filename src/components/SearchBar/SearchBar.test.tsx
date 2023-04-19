import { describe, it } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Renders SearchBar', async () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </MemoryRouter>
    );
    expect(container.getElementsByClassName('search-bar')[0]).toBeInTheDocument();
    fireEvent.keyDown(container, { key: 'Enter' });
    await waitFor(() => {
      expect(window.location.pathname).toEqual('/');
    });
  });
});
