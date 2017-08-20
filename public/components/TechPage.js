import React from 'react';

export class TechPage extends React.Component {
  constructor(props) {
      super(props);
    }
  render() {
    return (
      <div>
        {this.props.techUsed.map( function(item, index){
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
    )
  };
};

export default TechPage;
