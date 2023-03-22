import { ICard } from '../types';

function Card(props: ICard) {
  const card = props;
  const imgUrl = `${card.post_url}/download?w=640`;
  return (
    <div className="cards__item card">
      <img src={imgUrl} alt={card.filename} className="card__img" />
      <p className="card__description">
        <a href={card.author_url} className="card__author">
          {card.author}
        </a>
      </p>
    </div>
  );
}

export default Card;
