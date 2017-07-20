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
          webTechUsed: [
            {name:"Node", icon:"devicon-angularjs-plain colored", url:"https://nodejs.org"},
            {name:"Express", icon:"devicon-express-original colored", url:"https://expressjs.com"},
            {name:"React", icon:"devicon-react-original", url:"https://facebook.github.io/react"},
            {name:"Webpack", icon:"devicon-webpack-plain colored", url:"https://webpack.github.io"},
            {name:"Babel", icon:"devicon-babel-plain colored", url:"https://babeljs.io"},
            {name:"GitHub API", icon: "devicon-github-plain", url:"https://github.com"}
          ]
      },
        {
          path: "/emics",
          name: "EMICS",
          gitRepoName: "EMICS-Website",
          websiteLink: "www.emi-cs.com",
          description: "Emergency Mobile Information & Communication System: A portable long range IOT device.",
          webTechUsed: [
            {name:"Node", icon:"devicon-angularjs-plain colored", url:"https://nodejs.org"},
            {name:"Express", icon:"devicon-express-original colored", url:"https://expressjs.com"},
            {name:"React", icon:"devicon-react-original", url:"https://facebook.github.io/react"},
            {name:"Webpack", icon:"devicon-webpack-plain colored", url:"https://webpack.github.io"},
            {name:"Babel", icon:"devicon-babel-plain colored", url:"https://babeljs.io"},
            {name:"Angular", icon:"devicon-angularjs-plain", url:"https://angularjs.org"}
          ]
        },
        {
          path: "/testophotography",
          name: "Testo Photography",
          gitRepoName: "testophotography",
          websiteLink: "www.testophotography.com",
          description: "This is my personal photography website. I hope you enjoy your visit.",
          webTechUsed: [
            {name:"Node", icon:"devicon-angularjs-plain colored", url:"https://nodejs.org"},
            {name:"Express", icon:"devicon-express-original colored", url:"https://expressjs.com"},
            {name:"Angular", icon:"devicon-angularjs-plain", url:"https://angularjs.org"},
            {name:"SwiperJS", icon:"", url:"idangero.us/swiper"},
            {name:"Sass", icon:"devicon-sass-original colored", url: "http://sass-lang.com"}
          ]
        },
        {
          path: "/prints",
          name: "Canvas Prints",
          gitRepoName: "canvasStore",
          websiteLink: "www.testophotography.com/prints",
          description: "An ecommerce website selling canvas prints. Window shoppers not just accepted but encouraged.",
          webTechUsed: [
            {name:"Rails", icon:"devicon-rails-plain colored", url:"http://rubyonrails.org"}
          ]
        },
        {
          path: "/sangria",
          name: "Sangria NYC",
          gitRepoName: "SangriaNYC",
          websiteLink: "www.sangrianewyorkcity.com",
          description: "A New York City community sangria recipe database.",
          webTechUsed: [
            {name:"Rails", icon:"devicon-rails-plain colored", url:"http://rubyonrails.org"}
          ]
        },
        {
          path: "/quickstarter",
          name: "Quick Starter",
          gitRepoName: "quickstarter",
          websiteLink: "www.gregorytesto.com/quickstarter",
          description: "This is my crowdfunding page for my canvas prints, photo book and my EMICS project.",
          webTechUsed: [
            {name:"React", icon:"devicon-react-original", url:"https://facebook.github.io/react"},
            {name:"Webpack", icon:"devicon-webpack-plain colored", url:"https://webpack.github.io"},
            {name:"Babel", icon:"devicon-babel-plain colored", url:"https://babeljs.io"},
            {name:"Rails", icon:"devicon-rails-plain colored", url:"http://rubyonrails.org"}
          ]
        },
        {
          path: "/photobot",
          name: "Photo Bot: 2nd Edition Ver. 2.31",
          gitRepoName: "PhotoBot",
          websiteLink: "www.gregorytesto.com/photobot",
          description: "A voice activated photography web app that provides photo tips and locations.",
          webTechUsed: [
            {name:"Rails", icon:"devicon-rails-plain colored", url:"http://rubyonrails.org"},
            {name:"Web Audio API", icon:"", url:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"},
            {name:"Google Maps API", icon:"", url:"https://www.google.com/maps/"},
            {name:"ResponsiveVoice.JS", icon:"", url:"https://responsivevoice.org/"}
          ]
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
