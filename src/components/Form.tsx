import React from 'react';
import InputField from './InputField';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  addCard() {
    const prop = this.props;
    console.log('Submit');
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          this.addCard();
        }}
      >
        <InputField label="Author" type="name" id="" className="form__item" />
        <p>
          Sex:
          <InputField label="Male" type="radio" id="" value="option1" />
          <InputField label="Female" type="radio" id="" value="option1" />
        </p>
        <InputField label="Date" type="date" id="" className="form__item" />
        <label htmlFor="selectCountry">
          Country:
          <select id="selectCountry" className="form__item" />
        </label>
        <InputField label="Upload image" type="file" id="" className="form__item" />
        <InputField label="I consent to my personal data" type="checkbox" id="" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
