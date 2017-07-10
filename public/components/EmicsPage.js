import React from 'react';
import { GithubComp } from './GithubComp';

export const EmicsPage = () => (
  <div className="emicsContainer">
    <h1>EMICS Page</h1>
    <div className="webstats left">
      <a href="http://www.emi-cs.com">View EMICS Website</a>
    </div>
    <GithubComp />
  </div>
);

export default EmicsPage;
