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
    var propObj = this.state.dataObj
    return (
      <div className="indexContainer">
        <h1>{propObj.name}</h1>
        <h5>{propObj.description}</h5>
          <ul>
            {propObj.webTechUsed.map( function(item, index){
              return(
                <ul key={index}>
                  <li>{item.name}</li>
                </ul>
              )
            })}
          </ul>
        <GithubComp repoName={propObj.gitRepoName} />
      </div>
    )
  }
};

export default IndexPage;
