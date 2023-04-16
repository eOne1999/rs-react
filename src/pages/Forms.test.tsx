import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Forms from './Forms';
import store from '../store';

describe('Forms', () => {
  it('Renders Forms', () => {
    render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms');
  });
});
