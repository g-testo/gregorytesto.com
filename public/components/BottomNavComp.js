
import React from 'react';
import { Link } from 'react-router-dom'

export class BottomNavComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteArr: [
        {
          name: "About Me",
          description: "My name is Gregory Testo and here is some interesting things about me.",
          link: "/biopage"
        },
        {
          name: "Contact Me",
          description: "The best way to contact me is...",
          link: "/contact"
        }
      ]
    }
  }
  render() {
    var dataToLoop = this.state.websiteArr
    return (
      <div>
        <div className="bottomAccordion accordion">
          <ul>
            {dataToLoop.map(function(array){
              return(
                <li key={array.name}>
                  <div>
                    <Link to={array.link}>
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
};

export default BottomNavComp;
