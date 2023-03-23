import cardsData from '../assets/cardsData';
import Card from './Card';

function Cards() {
  return (
    <div className="cards">
      {cardsData
        .sort(() => Math.random() - 0.5)
        .slice(0, 30)
        .map((elem) => (
          <Card
            key={elem.id}
            format={elem.format}
            width={elem.width}
            height={elem.height}
            filename={elem.filename}
            id={elem.id}
            author={elem.author}
            author_url={elem.author_url}
            post_url={elem.post_url}
          />
        ))}
    </div>
  );
}

export default Cards;
