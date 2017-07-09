import React from 'react'
import { Route } from 'react-router-dom'
import { IndexPage } from './IndexPage';
import { TestophotographyPage } from './TestophotographyPage';
import { PrintsPage } from './PrintsPage';
import { SangriaPage } from './SangriaPage';
import { EmicsPage } from './EmicsPage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';
import { TopNavComp } from './TopNavComp';
import { BottomNavComp } from './BottomNavComp';
import { QuickstarterPage } from './QuickstarterPage';
import { BioPage } from './BioPage';

export const App = () => (

  <div>
    <TopNavComp />
    <Route exact path="/" component={IndexPage}/>
    <Route path="/biopage" component={BioPage}/>
    <Route path="/testophotography" component={TestophotographyPage}/>
    <Route path="/prints" component={PrintsPage}/>
    <Route path="/sangria" component={SangriaPage}/>
    <Route path="/emics" component={EmicsPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route path="/quickstarterpage" component={QuickstarterPage}/>
    <BottomNavComp />
  </div>
)
export default App;
