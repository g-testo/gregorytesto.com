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

        <div className="modalContainer">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Technologies Used</button>
          <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                  <h4 className="modal-title" id="myModalLabel">Technologies Used</h4>
                </div>
                <div className="modal-body">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <GithubComp repoName={propObj.gitRepoName} />
      </div>
    )
  }
};

export default IndexPage;
