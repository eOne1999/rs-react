import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';

describe('Cards', () => {
  let searchValue = 'apple';
  const setSearchValue = () => {
    searchValue = 'banana';
  };

  it('Renders Cards with searchValue', () => {
    render(<Cards searchValue={searchValue} setSearchValue={setSearchValue} />);
    expect(screen.getByText(/Results for:/i)).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
