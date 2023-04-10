import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Form from '../components/Form/Form';
import { TFormData } from '../types';
import FormCard from '../components/FormCard/FormCard';
import Popup from '../components/Popup/Popup';

function Forms() {
  const [data, setData] = useState<TFormData[]>([]);
  const [active, setActive] = useState(false);
  const popupText = 'Card have been added!';

  return (
    <>
      <h1>Forms</h1>
      <p>Upload your photo!</p>
      <Form
        submitData={data}
        setSubmitData={setData}
        popupActive={active}
        setPopupActive={setActive}
      />
      <div className="cards">
        {data.map((item) => (
          <FormCard
            key={uuid()}
            author={item.author}
            country={item.country}
            date={item.date}
            photographer={item.photographer}
            image={item.image}
          />
        ))}
      </div>
      <Popup active={active} setActive={setActive} data={popupText} />
    </>
  );
}

export default Forms;
