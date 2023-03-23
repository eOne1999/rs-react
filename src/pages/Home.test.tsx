import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('Renders Home', () => {
    const { container } = render(<Home />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
    expect(container.querySelector('.cards')).toBeInTheDocument();
  });
});
