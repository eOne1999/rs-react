import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import Card from './Card';
import { TCard } from '../../types';

const params: TCard = {
  card: {
    id: '52801567905',
    owner: '95376847@N06',
    secret: 'b5519405f6',
    server: '65535',
    farm: 66,
    title: 'Beautiful photo',
    ispublic: 1,
    isfriend: 0,
    isfamily: 0,
    datetaken: '2023-04-07 00:00:00',
    ownername: 'oterrason',
    description: {
      _content: 'Text description',
    },
  },

  setPopupActive(): void {},
  setActiveCard(): void {},
};

describe('Card', () => {
  it('Renders Card', () => {
    const { container } = render(<Card {...params} />);
    const cardElement = container.getElementsByClassName('card')[0];
    const cardImg = cardElement.getElementsByClassName('card__img')[0];

    expect(cardElement).toBeInTheDocument();
    fireEvent.click(cardElement);
    expect(cardImg).toBeInTheDocument();
    expect(container.getElementsByClassName('card__description')[0]).toBeInTheDocument();
  });
});
