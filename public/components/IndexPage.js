import React from 'react';
import { render } from 'react-dom';
import { GithubComp } from './GithubComp';

export class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: this.props.appData
    }
  }
  render() {
    return (
      <div className="indexContainer">
        <h1>{this.state.dataObj.name}</h1>
        <h5>{this.state.dataObj.description}</h5>
        <p>{this.state.dataObj.webTechUsed}</p>
        <GithubComp repoName={this.state.dataObj.gitRepoName} />
      </div>
    )
  }
};

export default IndexPage;
