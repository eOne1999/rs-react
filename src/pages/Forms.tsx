import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Form from '../components/Form/Form';
import FormCard from '../components/FormCard/FormCard';
import Popup from '../components/Popup/Popup';
import { useAppSelector } from '../hooks';

function Forms() {
  const formCards = useAppSelector((state) => state.form.formCards);
  const [active, setActive] = useState(false);
  const popupText = 'Card have been added!';

  return (
    <>
      <h1>Forms</h1>
      <p>Upload your photo!</p>
      <Form popupActive={active} setPopupActive={setActive} />
      <div className="cards">
        {formCards.map((item) => (
          <FormCard key={uuid()} {...item} />
        ))}
      </div>
      <Popup active={active} setActive={setActive} data={popupText} />
    </>
  );
}

export default Forms;
