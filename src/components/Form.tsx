import React from 'react';
import InputField from './InputField';

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
        <InputField label="Author" type="name" id="" className="form__item" />
        <p>
          Sex:
          <InputField label="Male" type="radio" id="" value="option1" />
          <InputField label="Female" type="radio" id="" value="option1" />
        </p>
        <InputField label="Date" type="date" id="" className="form__item" />
        <label htmlFor="country">
          Country:
          <select id="country" className="form__item" aria-label="country" />
        </label>
        <InputField label="Upload image" type="file" id="" className="form__item" />
        <InputField label="I consent to my personal data" type="checkbox" id="" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
