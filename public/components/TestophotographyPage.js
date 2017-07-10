import React from 'react';
import { Button } from 'react-bootstrap';
import { GithubComp } from './GithubComp';

export const TestophotographyPage = () => (
  <div className="testophotographyContainer">
    <h1>Testo Photography Page</h1>
    <Button href="http://www.testophotography.com" bsStyle="primary">View Testo Photography Website</Button>
    <GithubComp />
  </div>
);

export default TestophotographyPage;
