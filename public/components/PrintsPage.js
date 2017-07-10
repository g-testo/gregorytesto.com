import React from 'react';
import { Button } from 'react-bootstrap';
import { GithubComp } from './GithubComp';

export const PrintsPage = () => (
  <div className="printsContainer">
    <h1>Canvas Prints Store Page</h1>
    <Button href="http://www.testophotography.com/prints" bsStyle="primary">View Canvas Prints Store Webpage</Button>
    <GithubComp />
  </div>
);

export default PrintsPage;
