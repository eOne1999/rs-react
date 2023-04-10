import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import FormCard from './FormCard';
import { TFormCard } from '../../types';

const params: TFormCard = {
  author: 'Author',
  image: 'https://live.staticflickr.com/65535/51314478617_145903ef25_q.jpg',
  country: 'United States',
  date: '2022-09-06',
  photographer: 'Yes',
};

describe('FormCard', () => {
  it('Renders FormCard', () => {
    const { container } = render(<FormCard {...params} />);
    expect(container.getElementsByClassName('form-card')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('form-card__img')[0]).toBeInTheDocument();
  });
});
