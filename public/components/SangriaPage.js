import React from 'react';
import { Button } from 'react-bootstrap';
import { GithubComp } from './GithubComp';

export const SangriaPage = () => (
  <div className="sangriaContainer">
    <h1>Sangria Page</h1>
    <Button href="http://www.sangrianewyorkcity.com" bsStyle="primary">View Sangria New York City Website</Button>
    <GithubComp />
  </div>
);

export default SangriaPage;
