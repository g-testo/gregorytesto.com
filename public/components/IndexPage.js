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
        {propObj.websiteLink != "n/a" ? <h5><a href={propObj.websiteLink} target="_blank">Website Link</a></h5> : ""}
        <div>
          {propObj.webTechUsed.map( function(item, index){
            return(
              <div key={index} className="list-group">
                <a className="list-group-item list-group-item-action" href={item.url} target="_blank">
                <i className={item.icon}> </i>
                {item.name}
                </a>
              </div>
            )
          })}
        </div>
        <GithubComp repoName={propObj.gitRepoName} />
      </div>
    )
  }
};

export default IndexPage;
