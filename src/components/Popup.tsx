import { RespPhotosSearch, TPopup } from '../types';

function Popup({ active, setActive, data }: TPopup) {
  let photo: RespPhotosSearch = {
    id: '',
    owner: '',
    secret: '',
    server: '',
    farm: '',
    title: '',
    ispublic: 0,
    isfriend: 0,
    isfamily: 0,
  };
  let isFormPage = false;

  if (data === 'Card have been added!') {
    isFormPage = true;
  } else {
    photo = data as RespPhotosSearch;
  }

  const imgSrc =
    photo.url_z ||
    photo.url_c ||
    photo.url_n ||
    photo.url_m ||
    photo.url_sq ||
    photo.url_t ||
    photo.url_s ||
    photo.url_q ||
    photo.url_l ||
    photo.url_o;

  const description = photo.description?._content.replace(/<(.|\n)*?>/g, '').slice(0, 150);

  return (
    <div
      className={active ? 'popup active' : 'popup'}
      onClick={() => setActive(false)}
      aria-hidden="true"
    >
      <div
        className={active ? 'popup__content active' : 'popup__content'}
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
      >
        {isFormPage && <p>{data.toString()}</p>}
        {!isFormPage && (
          <div className="popup__container">
            <img src={imgSrc} alt={photo.title} className="popup__img" />
            <div className="popup__description">
              {photo.title && <p>{photo.title}</p>}
              {photo.ownername && <p>Author: {photo.ownername}</p>}
              {photo.datetaken && <p>Date: {photo.datetaken}</p>}
              {description && <p>Description: {description}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Popup;
