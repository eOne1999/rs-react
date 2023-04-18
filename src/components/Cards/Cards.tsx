import { useState } from 'react';
import { RespPhotosSearch } from '../../types';
import Card from '../Card/Card';
import Popup from '../Popup/Popup';
import { useAppSelector } from '../../hooks';
import { useFetchCardsQuery } from '../../store/cardsApi';

function Cards() {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const queryParams = searchValue
    ? `text=${searchValue}&sort=relevance`
    : 'tags=nature, city, architecture&sort=interestingness-desc';
  const { data, isFetching, error } = useFetchCardsQuery(queryParams);

  const [popupActive, setPopupActive] = useState(false);
  const [activeCard, setActiveCard] = useState<RespPhotosSearch>({
    id: '',
    owner: '',
    secret: '',
    server: '',
    farm: 0,
    title: '',
    ispublic: 0,
    isfriend: 0,
    isfamily: 0,
  });

  let errorMsg = '';
  let arr: RespPhotosSearch[] = [];

  if (data && data.stat !== 'ok') {
    errorMsg = data.message as string;
  }

  if (data?.photos?.photo) arr = data.photos.photo;
  const photos = [...arr].sort(() => Math.random() - 0.5);

  return (
    <>
      {searchValue && <p>Results for: {searchValue}</p>}
      {isFetching && <p>Loading...</p>}
      {errorMsg && <p>{errorMsg}</p>}
      {!isFetching && !error && !errorMsg && (
        <div className="cards">
          {photos &&
            photos.map((elem) => (
              <Card
                key={elem.id}
                card={elem}
                setPopupActive={setPopupActive}
                setActiveCard={setActiveCard}
              />
            ))}
        </div>
      )}
      <Popup active={popupActive} setActive={setPopupActive} data={activeCard} />
    </>
  );
}

export default Cards;
