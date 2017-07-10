import React from 'react';
import { Button } from 'react-bootstrap';
import { GithubComp } from './GithubComp';

export const EmicsPage = () => (
  <div className="emicsContainer">
    <h1>EMICS Page</h1>
    <div className="webstats left">
      <h3>Website Name: EMI-CS.com</h3>
      <Button href="http://www.emi-cs.com" bsStyle="primary">View EMICS Webpage</Button>
      <h3>Website Technologies Used:</h3>
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>React</li>
        <li>Angular 1</li>
        <li>GitHub Version Control</li>
      </ul>
    </div>
    <GithubComp />
  </div>
);

export default EmicsPage;
