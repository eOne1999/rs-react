import React from 'react';
import InputField from './InputField';
import countries from '../assets/countriesList';

class Form extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <InputField
          label="Author"
          type="name"
          name="author"
          placeholder="Full Name"
          className="form__item"
        />
        <p>
          Are you a professional photographer?
          <InputField label="Yes" type="radio" name="photographer" value="yes" />
          <InputField label="No" type="radio" name="photographer" value="no" />
        </p>
        <InputField label="Date of photo" type="date" name="date" className="form__item" />
        <label htmlFor="country">
          Country
          <select id="country" className="form__item" aria-label="country" defaultValue="default">
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
        <InputField label="Upload image" type="file" name="image" className="form__item" />
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
}

export default Form;
