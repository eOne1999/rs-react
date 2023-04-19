import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../store';

describe('Home', () => {
  it('Renders Home', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });
});
