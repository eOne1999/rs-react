import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import countries from '../../data/countriesList';
import { TForm, TFormData } from '../../types';
import { useActions } from '../../hooks';

function Form({ setPopupActive }: TForm) {
  const { setFormCard } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormData>();

  const formRef = React.useRef<HTMLFormElement>(null);

  const submit: SubmitHandler<TFormData> = (data) => {
    const file = data.file ? data.file[0] : null;
    const imgUrl = file ? URL.createObjectURL(file) : undefined;
    data.image = imgUrl;
    delete data.file;
    setFormCard(data);
    setPopupActive(true);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)} ref={formRef}>
      <label htmlFor="author">
        Author
        <input
          type="text"
          placeholder="Full Name"
          className="form__item"
          {...register('author', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z'-]+\s[A-Za-z'-]+$/,
              message: 'Should contain the first and last name',
            },
          })}
        />
        {errors.author && <span className="form__error">{errors.author?.message}</span>}
      </label>

      <p>
        Are you a professional photographer?
        <label htmlFor="photographer">
          Yes
          <input type="radio" value="yes" {...register('photographer', { required: true })} />
        </label>
        <label htmlFor="photographer">
          No
          <input type="radio" value="no" {...register('photographer', { required: true })} />
        </label>
        {errors.photographer && <span className="form__error">This field is required</span>}
      </p>

      <label htmlFor="date">
        Date of photo
        <input type="date" className="form__item" {...register('date', { required: true })} />
        {errors.date && <span className="form__error">This field is required</span>}
      </label>

      <label htmlFor="country">
        Country
        <select
          className="form__item"
          aria-label="country"
          defaultValue=""
          {...register('country', { required: true })}
        >
          <option value="" disabled>
            Select country
          </option>
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country && <span className="form__error">This field is required</span>}
      </label>

      <label htmlFor="file">
        Upload photo
        <input
          type="file"
          className="form__item"
          accept="image/*"
          {...register('file', { required: true })}
        />
        {errors.file && <span className="form__error">This field is required</span>}
      </label>

      <label htmlFor="confirmation">
        I consent to my personal data
        <input
          type="checkbox"
          className="form__item"
          {...register('confirmation', { required: true })}
        />
        {errors.confirmation && <span className="form__error">This field is required</span>}
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
