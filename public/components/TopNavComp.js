import React from 'react';
import { Link } from 'react-router-dom'
import { render } from 'react-dom';


export class TopNavComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: this.props.appData
    }
  }
  render() {
    return (
      <div>
        <div className="topAccordion accordion">
          <ul>
            {this.state.dataArr.map(function(array){
              return(
                <li key={array.name}>
                  <div>
                    <Link to={array.path}>
                      <h2>{array.name}</h2>
                      <p>{array.description}</p>
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default TopNavComp;
