import React from 'react';
import { Link } from 'react-router-dom'
import { render } from 'react-dom';


export class TopNavComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteArr: [
        {
          name: "gregorytesto.com",
          description: "This is an accumulation of my work. Take a look around.",
          link: "/"
        },
        {
          name: "EMICS",
          description: "Emergency Mobile Information & Communication System: A portable long range IOT device.",
          link: "/emics"
        },
        {
          name: "Testo Photography",
          description: "This is my personal photography website. I hope you enjoy your visit.",
          link: "/testophotography"
        },
        {
          name: "Canvas Prints",
          description: "An ecommerce website selling canvas prints. Window shoppers not just accepted but encouraged.",
          link: "/prints"
        },
        {
          name: "Sangria NYC",
          description: "A New York City community sangria recipe database.",
          link: "/sangria"
        },
        {
          name: "Quick Starter",
          description: "This is my crowdfunding page for my canvas prints, photo book and my EMICS project.",
          link: "/quickstarter"
        },
        {
          name: "Photo Bot: 2nd Edition Ver. 2.31",
          description: "A voice activated photography web app that provides photo tips and locations.",
          link: "/photobot"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <div className="topAccordion accordion">
          <ul>
            {this.state.websiteArr.map(function(array){
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
}
export default TopNavComp;
