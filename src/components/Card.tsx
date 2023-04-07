import { TCard } from '../types';

function Card(props: TCard) {
  const card = props;
  const imgUrl = card.src;
  return (
    <div className="cards__item card">
      <img src={imgUrl} alt={card.id} className="card__img" />
      <p className="card__description">
        <a href={card.src} className="card__author">
          {card.title}
        </a>
      </p>
    </div>
  );
}

export default Card;
