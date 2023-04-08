import { TFormCard } from '../types';

function FormCard(props: TFormCard) {
  const card = props;
  return (
    <div className="cards__item form-card">
      <img src={card.image} alt={`By ${card.author}`} className="form-card__img" />
      <p className="form-card__description">
        Author: {card.author}
        <br />
        Professional photographer: {card.photographer}
        <br />
        Date: {card.date}
        <br />
        Country: {card.country}
      </p>
    </div>
  );
}

export default FormCard;
