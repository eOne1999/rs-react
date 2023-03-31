import { TPopup } from '../types';

function Popup({ active, setActive }: TPopup) {
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
        Card have been added!
      </div>
    </div>
  );
}

export default Popup;
