/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import Card from '../components/Card';
import Form from '../components/Form';
// import { TFormData } from '../types';

class Forms extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = '';
  }

  // eslint-disable-next-line class-methods-use-this, react/no-unused-class-component-methods
  // addCard() {
  //   console.log('add');
  // }

  render(): React.ReactNode {
    // const currState = this.state;
    return (
      <>
        <h1>Forms</h1>
        <p>Upload your photo!</p>
        <Form />
        {/* <div className="cards">
          <p>{this.state.author}</p>
          {currState.cards.map((card) => (
            <Card
              key={card.id.toString()}
              author={card.author}
              post_url={card.post_url}
              id={card.id}
            />
          ))} 
        </div> */}
      </>
    );
  }
}

export default Forms;
