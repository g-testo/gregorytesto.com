import React from 'react'
import { Route } from 'react-router-dom'
import { IndexPage } from './IndexPage';

import { TopNavComp } from './TopNavComp';
import { BottomNavComp } from './BottomNavComp';

import { BioPage } from './BioPage';
import { PrintsPage } from './PrintsPage';
import { SangriaPage } from './SangriaPage';
import { EmicsPage } from './EmicsPage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';
import { PhotobotPage } from './PhotobotPage';
import { QuickstarterPage } from './QuickstarterPage';
import { TestophotographyPage } from './TestophotographyPage';


export const App = () => (

  <div>
    <TopNavComp />
    <Route exact path="/" component={IndexPage}/>
    <Route path="/biopage" component={BioPage}/>
    <Route path="/emics" component={EmicsPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/prints" component={PrintsPage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route path="/sangria" component={SangriaPage}/>
    <Route path="/photobot" component={PhotobotPage}/>
    <Route path="/quickstarter" component={QuickstarterPage}/>
    <Route path="/testophotography" component={TestophotographyPage}/>
    <BottomNavComp />
  </div>
)
export default App;
