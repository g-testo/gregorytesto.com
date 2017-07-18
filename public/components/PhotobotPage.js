import React from 'react';
import { Button } from 'react-bootstrap';
import { GithubComp } from './GithubComp';

export const PhotobotPage = () => (
  <div className="photobotContainer">
    <h1>Photo Bot Page</h1>
    <h5>2nd Edition Ver. 2.31</h5>
    <div className="webstats left">
      <h3>Website Name: photobot.com</h3>
      <Button href="http://www.gregorytesto.com/photobot" bsStyle="primary">View Photo Bot Webpage</Button>
      <h3>Website Technologies Used:</h3>
      <ul>
        <li>Rails</li>
        <li>Web Audio API</li>
        <li>Google Maps API</li>
        <li>ResponsiveVoice.JS</li>
        <li>GitHub Version Control</li>
      </ul>
    </div>
    <GithubComp />
  </div>
);

export default PhotobotPage;
