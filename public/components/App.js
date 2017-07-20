import React from 'react'
import { Route } from 'react-router-dom'

import { TopNavComp } from './TopNavComp';
import { BottomNavComp } from './BottomNavComp';

import { BioPage } from './BioPage';
import { IndexPage } from './IndexPage';
import { ContactPage } from './ContactPage';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: [
        {
          path: "/",
          name: "GregoryTesto.com",
          gitRepoName: "gregorytesto.com",
          websiteLink: "www.gregorytesto.com",
          description: "This is an accumulation of my work. Take a look around.",
          webTechUsed: ["Node", "Express", "React", "Git Hub API"]
        },
        {
          path: "/emics",
          name: "EMICS",
          gitRepoName: "EMICS-Website",
          websiteLink: "www.emi-cs.com",
          description: "Emergency Mobile Information & Communication System: A portable long range IOT device.",
          webTechUsed: ["Node", "Express", "React", "Angular"]
        },
        {
          path: "/testophotography",
          name: "Testo Photography",
          gitRepoName: "testophotography",
          websiteLink: "www.testophotography.com",
          description: "This is my personal photography website. I hope you enjoy your visit.",
          webTechUsed: ["Node", "Express", "Angular", "Swiper.JS", "Sass"]

        },
        {
          path: "/prints",
          name: "Canvas Prints",
          gitRepoName: "canvasStore",
          websiteLink: "www.testophotography.com/prints",
          description: "An ecommerce website selling canvas prints. Window shoppers not just accepted but encouraged.",
          webTechUsed: ["Rails", "Devise"]
        },
        {
          path: "/sangria",
          name: "Sangria NYC",
          gitRepoName: "SangriaNYC",
          websiteLink: "www.sangrianewyorkcity.com",
          description: "A New York City community sangria recipe database.",
          webTechUsed: ["Rails", "Devise"]

        },
        {
          path: "/quickstarter",
          name: "Quick Starter",
          gitRepoName: "quickstarter",
          websiteLink: "www.gregorytesto.com/quickstarter",
          description: "This is my crowdfunding page for my canvas prints, photo book and my EMICS project.",
          webTechUsed: ["React", "Rails"]
        },
        {
          path: "/photobot",
          name: "Photo Bot: 2nd Edition Ver. 2.31",
          gitRepoName: "PhotoBot",
          websiteLink: "www.gregorytesto.com/photobot",
          description: "A voice activated photography web app that provides photo tips and locations.",
          webTechUsed: ["Rails", "Web Audio API", "Google Maps API", "ResponsiveVoice.JS"]
        }
      ]
    };
  };

  render() {
    var dataToPass = this.state.dataArr
    return (
      <div>
        <TopNavComp appData = {dataToPass} />
        {dataToPass.map(function(array){
          return(
          <Route key={array.name} exact path={array.path} render={(props) => (
            <IndexPage {...props} appData = {array} />
          )}/>
        )
        })}

        <Route path="/biopage" component={BioPage}/>
        <Route path="/contact" component={ContactPage}/>

        <BottomNavComp />
      </div>
    )
  }
}
export default App;
