
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
    return (
      // <div>
      //   <div className="bottomAccordion accordion">
      //     <ul>
      //       {this.state.websiteArr.map(function(array){
      //         return(
      //           <li key={array.name}>
      //             <div>
      //               <Link to={array.link}>
      //                 <h2>{array.name}</h2>
      //                 <p>{array.description}</p>
      //               </Link>
      //             </div>
      //           </li>
      //         );
      //       })};
      //     </ul>
      //   </div>
      // </div>


      <div>
        <div className="bottomAccordion accordion">
          <ul>
            <li>
              <div>
                <Link to={this.state.websiteArr[0].link}>
                  <h2>{this.state.websiteArr[0].name}</h2>
                  <p>{this.state.websiteArr[0].description}</p>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to={this.state.websiteArr[1].link}>
                  <h2>{this.state.websiteArr[1].name}</h2>
                  <p>{this.state.websiteArr[1].description}</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};

export default BottomNavComp;
