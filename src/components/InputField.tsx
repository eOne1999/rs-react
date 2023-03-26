import React from 'react';
import { TInputField } from '../types';

class InputField extends React.Component<TInputField> {
  render() {
    const input = this.props;
    return (
      <label htmlFor={input.id}>
        {input.label}
        <input
          id={input.id}
          type={input.type}
          ref={input.ref}
          value={input.value}
          name={input.id}
          className={input.className}
        />
        {input.error}
      </label>
    );
  }
}

export default InputField;
