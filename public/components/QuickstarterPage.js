import React from 'react';
import { Button } from 'react-bootstrap';
import { GithubComp } from './GithubComp';

export const QuickstarterPage = () => (
  <div>
    <h1>Quickstarter Page</h1>
    <Button href="http://gregorytesto.com/quickstarter" bsStyle="primary">View Quickstarter Website</Button>
    <GithubComp />
  </div>
);

export default QuickstarterPage;
