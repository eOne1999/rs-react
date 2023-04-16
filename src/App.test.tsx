import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App, WrappedApp } from './App';
import store from './store';

describe('App', () => {
  it('Renders home page', () => {
    render(
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/invalid-path']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page not found');
  });
});
