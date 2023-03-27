import React from 'react';
import { TInputField } from '../types';

class InputField extends React.Component<TInputField> {
  render() {
    const input = this.props;
    return (
      <label htmlFor={input.id}>
        {input.label}
        <input
          id={input.name}
          type={input.type}
          ref={input.ref}
          value={input.value}
          name={input.name}
          className={input.className}
          placeholder={input.placeholder}
          required
        />
        {input.error}
      </label>
    );
  }
}

export default InputField;
