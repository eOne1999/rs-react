import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputField from './InputField';
import countries from '../assets/countriesList';
import { TForm } from '../types';
import FormCard from './FormCard';

class Form extends React.Component<object, TForm> {
  inputRef: React.RefObject<HTMLInputElement>;

  formRef: React.RefObject<HTMLFormElement>;

  cardsRef: React.RefObject<HTMLDivElement>;

  constructor(props: TForm) {
    super(props);
    this.state = {
      formData: {
        author: '',
        photographer: '',
        date: '',
        country: '',
        image: '',
      },
      submit: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.inputRef = React.createRef();
    this.formRef = React.createRef();
    this.cardsRef = React.createRef();
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    if (this.inputRef.current?.files?.length) {
      const link = URL.createObjectURL(this.inputRef.current.files[0]);
      this.setState((prevState) => ({
        ...prevState,
        formData: {
          ...prevState.formData,
          image: link,
        },
      }));
    }

    this.setState((prevState) => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [event.target.name]: event.target.value,
      },
    }));
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      submit: [...prevState.submit, prevState.formData],
    }));
    this.formRef.current?.reset();
  }

  render() {
    const currState = this.state;
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit} ref={this.formRef}>
          <InputField
            label="Author"
            type="text"
            name="author"
            placeholder="Full Name"
            className="form__item"
            onChange={this.handleChange}
          />
          <p>
            Are you a professional photographer?
            <InputField
              label="Yes"
              type="radio"
              name="photographer"
              value="yes"
              id="yes"
              onChange={this.handleChange}
            />
            <InputField
              label="No"
              type="radio"
              name="photographer"
              value="no"
              id="no"
              onChange={this.handleChange}
            />
          </p>
          <InputField
            label="Date of photo"
            type="date"
            name="date"
            className="form__item"
            onChange={this.handleChange}
          />
          <label htmlFor="country">
            Country
            <select
              id="country"
              className="form__item"
              aria-label="country"
              defaultValue="default"
              name="country"
              onChange={this.handleChange}
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
            <input
              type="file"
              name="file"
              className="form__item"
              accept="image/*"
              onChange={this.handleChange}
              ref={this.inputRef}
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
        <div className="cards" ref={this.cardsRef}>
          {currState.submit.map((item) => (
            <FormCard
              key={uuidv4()}
              author={item.author}
              country={item.country}
              date={item.date}
              photographer={item.photographer}
              image={item.image}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Form;
