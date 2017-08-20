import React from 'react';
import { TechPage } from './TechPage';


export class ModalComp extends React.Component {
  constructor(props) {
      super(props);
    }
  render() {
    return (
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
                <TechPage techUsed={this.props.techModalPass}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default ModalComp;
