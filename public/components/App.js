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
          websiteLink: "n/a",
          description: "This is an accumulation of my work. Take a look around.",
          webTechUsed: [
            {name:"Node", icon:"devicon-angularjs-plain colored", url:"https://nodejs.org"},
            {name:"Express", icon:"devicon-express-original colored", url:"https://expressjs.com"},
            {name:"React", icon:"devicon-react-original", url:"https://facebook.github.io/react"},
            {name:"Webpack", icon:"devicon-webpack-plain colored", url:"https://webpack.github.io"},
            {name:"Babel", icon:"devicon-babel-plain colored", url:"https://babeljs.io"},
            {name:"GitHub API", icon: "devicon-github-plain", url:"https://developer.github.com/"}
          ]
        },
        {
          path: "/testophotography",
          name: "Testo Photography",
          gitRepoName: "testophotography",
          websiteLink: "http://www.testophotography.com",
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
          path: "/sangria",
          name: "Sangria NYC",
          gitRepoName: "SangriaNYC",
          websiteLink: "http://www.sangrianewyorkcity.com",
          description: "A New York City community sangria recipe database.",
          webTechUsed: [
            {name:"Rails", icon:"devicon-rails-plain colored", url:"http://rubyonrails.org"}
            // -devise -bootstrap -x-editable -mailgun -AWS -carrierwave -jquery -jquery-autocomplete -SASS -omniauth-facebook -filterrific -recaptcha -public_activity -pagination
          ]
        },
        {
          path: "/photobot",
          name: "Photo Bot: 2nd Edition Ver. 2.31",
          gitRepoName: "PhotoBot",
          websiteLink: "http://www.gregorytesto.com/photobot",
          description: "A voice activated photography web app that provides photo tips and locations.",
          webTechUsed: [
            {name:"Rails", icon:"devicon-rails-plain colored", url:"http://rubyonrails.org"},
            {name:"Web Audio API", icon:"", url:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"},
            {name:"Google Maps API", icon:"devicon-google-plain colored", url:"https://www.google.com/maps/"},
            {name:"ResponsiveVoice.JS", icon:"", url:"https://responsivevoice.org/"}
          ]
        },
        // {
        //   path: "/emics",
        //   name: "EMICS",
        //   gitRepoName: "EMICS-Website",
        //   websiteLink: "http://www.emi-cs.com",
        //   description: "Emergency Mobile Information & Communication System: A portable long range IOT device.",
        //   webTechUsed: [
        //     {name:"Node", icon:"devicon-angularjs-plain colored", url:"https://nodejs.org"},
        //     {name:"Express", icon:"devicon-express-original colored", url:"https://expressjs.com"},
        //     {name:"React", icon:"devicon-react-original", url:"https://facebook.github.io/react"},
        //     {name:"Webpack", icon:"devicon-webpack-plain colored", url:"https://webpack.github.io"},
        //     {name:"Babel", icon:"devicon-babel-plain colored", url:"https://babeljs.io"},
        //     {name:"Angular", icon:"devicon-angularjs-plain", url:"https://angularjs.org"}
        //   ]
        // },
        // {
        //   path: "/prints",
        //   name: "Canvas Prints",
        //   gitRepoName: "canvasStore",
        //   websiteLink: "http://www.testophotography.com/prints",
        //   description: "An ecommerce website selling canvas prints. Window shoppers not just accepted but encouraged.",
        //   webTechUsed: [
        //     {name:"Rails", icon:"devicon-rails-plain colored", url:"http://rubyonrails.org"}
        //   ]
        // },
        // {
        //   path: "/quickstarter",
        //   name: "Quick Starter",
        //   gitRepoName: "Quickstarter",
        //   websiteLink: "http://www.gregorytesto.com/quickstarter",
        //   description: "This is my crowdfunding page for my canvas prints, photo book and my EMICS project.",
        //   webTechUsed: [
        //     {name:"React", icon:"devicon-react-original", url:"https://facebook.github.io/react"},
        //     {name:"Webpack", icon:"devicon-webpack-plain colored", url:"https://webpack.github.io"},
        //     {name:"Babel", icon:"devicon-babel-plain colored", url:"https://babeljs.io"},
        //     {name:"Rails", icon:"devicon-rails-plain colored", url:"http://rubyonrails.org"}
        //   ]
        // }
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
