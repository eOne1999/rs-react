import { useEffect, useState } from 'react';
import AppController from '../controller/controller';
import { RespFromGet, RespPhotosSearch, TCard } from '../types';
import getImageLink from '../utils/getImageLink';
import Card from './Card';

function Cards() {
  const [photos, setPhotos] = useState<TCard[]>([]);

  useEffect(() => {
    (async () => {
      const arrData: TCard[] = [];
      const controller = new AppController();
      const data: RespFromGet<RespPhotosSearch> = await controller.getPhotosSearch({
        privacy_filter: '1',
        content_type: '1',
        tags: 'nature',
      });
      data.photos.photo.forEach((photo) => {
        arrData.push({
          ...photo,
          src: getImageLink(photo),
        });
      });
      setPhotos(arrData.slice(0, 30));
    })();
  }, []);

  return (
    <div className="cards">
      {photos
        .sort(() => Math.random() - 0.5)
        .map((elem) => (
          <Card key={elem.id} {...elem} />
        ))}
    </div>
  );
}

export default Cards;
