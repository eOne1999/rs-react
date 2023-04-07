import { useEffect, useState } from 'react';
import AppController from '../controller/controller';
import { RespFromGet, RespPhotosSearch, TSearch } from '../types';
import Card from './Card';

function Cards({ searchValue }: TSearch) {
  const [photos, setPhotos] = useState<RespPhotosSearch[]>([]);

  useEffect(() => {
    (async () => {
      const arrData: RespPhotosSearch[] = [];
      const controller = new AppController();
      let data: RespFromGet<RespPhotosSearch> = {
        photos: {
          page: 0,
          pages: 0,
          perpage: 0,
          total: 0,
          photo: [],
        },
        stat: '',
      };

      if (searchValue) {
        data = await controller.getPhotosSearch({
          privacy_filter: '1',
          safe_search: '3',
          content_type: '1',
          text: searchValue,
          sort: 'relevance',
          extras:
            'date_upload, owner_name, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c,url_l, url_o',
        });
      } else {
        data = await controller.getPhotosSearch({
          privacy_filter: '1',
          safe_search: '3',
          content_type: '1',
          tags: 'nature, city, architecture',
          sort: 'interestingness-desc',
          extras:
            'date_upload, owner_name, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c,url_l, url_o',
        });
      }

      data.photos.photo.forEach((photo) => {
        arrData.push({
          ...photo,
        });
      });
      setPhotos(arrData);
    })();
  }, [searchValue]);

  return (
    <>
      {searchValue && <p>Results for: {searchValue}</p>}
      <div className="cards">
        {photos
          .sort(() => Math.random() - 0.5)
          .map((elem) => (
            <Card key={elem.id} {...elem} />
          ))}
      </div>
    </>
  );
}

export default Cards;
