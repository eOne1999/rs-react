import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  let searchValue = '';
  const setSearchValue = () => {
    searchValue = 'apple';
  };

  it('Renders Home', () => {
    render(<Home searchValue={searchValue} setSearchValue={setSearchValue} />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });
});
