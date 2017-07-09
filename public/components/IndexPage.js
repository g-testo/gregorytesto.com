import React from 'react';
import { render } from 'react-dom';
import { GithubComp } from './GithubComp';

export class IndexPage extends React.Component {
  render() {
    return (
      <div className="indexContainer">
        <h1>Details of this website</h1>
        <GithubComp />
      </div>
    )
  }
};

export default IndexPage;
