import React from 'react';
import { render } from 'react-dom';

export class BioPage extends React.Component {
  render() {
    return (
      <div className="indexContainer">
        <h2>Who am I?</h2>
        <p> My name is Gregory Testo and I am a Rails and JavaScript web developer. </p>
      </div>
    )
  }
};

export default BioPage;
