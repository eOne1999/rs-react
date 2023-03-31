import React, { useState } from 'react';
import InputField from './InputField';
import countries from '../assets/countriesList';
import { TForm, TFormData } from '../types';

function Form({ submitData, setSubmitData, setPopupActive }: TForm) {
  const [formData, setFormData] = useState<TFormData>({
    author: '',
    photographer: '',
    date: '',
    country: '',
    image: '',
  });

  const inputRef = React.useRef<HTMLInputElement>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    let imgUrl = '';
    if (inputRef.current?.files?.length) {
      imgUrl = URL.createObjectURL(inputRef.current.files[0]);
    }

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      image: imgUrl,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitData([...submitData, formData]);
    formRef.current?.reset();
    setPopupActive(true);
  };

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <InputField
        label="Author"
        type="text"
        name="author"
        placeholder="Full Name"
        className="form__item"
        onChange={handleChange}
      />
      <p>
        Are you a professional photographer?
        <InputField
          label="Yes"
          type="radio"
          name="photographer"
          value="yes"
          id="yes"
          onChange={handleChange}
        />
        <InputField
          label="No"
          type="radio"
          name="photographer"
          value="no"
          id="no"
          onChange={handleChange}
        />
      </p>
      <InputField
        label="Date of photo"
        type="date"
        name="date"
        className="form__item"
        onChange={handleChange}
      />
      <label htmlFor="country">
        Country
        <select
          id="country"
          className="form__item"
          aria-label="country"
          defaultValue="default"
          name="country"
          onChange={handleChange}
        >
          <option value="default" disabled>
            Select country
          </option>
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="file">
        Upload photo
        <input
          type="file"
          name="image"
          className="form__item"
          accept="image/*"
          onChange={handleChange}
          ref={inputRef}
        />
      </label>
      <InputField
        label="I consent to my personal data"
        type="checkbox"
        name="confirmation"
        className="form__item"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
