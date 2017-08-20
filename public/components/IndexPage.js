import React from 'react';
import { render } from 'react-dom';
import { GithubComp } from './GithubComp';
import { ModalComp } from './ModalComp';


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
        {propObj.websiteLink != "n/a" ? <h5><a className="btn btn-primary" href={propObj.websiteLink} target="_blank">Website Link</a></h5> : ""}
        <ModalComp techModalPass ={propObj.webTechUsed}/>
        <GithubComp repoName={propObj.gitRepoName} />
      </div>
    )
  }
};

export default IndexPage;
