import React from 'react';
import Form from '../components/Form';

class Forms extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = '';
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>Forms</h1>
        <p>Upload your photo!</p>
        <Form />
      </>
    );
  }
}

export default Forms;
