
import React from 'react';
import { Link } from 'react-router-dom'

export const TopNavComp = () => (
  <div>
    <div className="topAccordion accordion">
      <ul>
        <li>
          <div>
            <a href="#">
              <h2>About Me</h2>
              <p>My name is Gregory Testo and I would like to thank you for visiting.</p>
              <Link to="/"> Website Link </Link>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">
              <h2>EMICS</h2>
              <p>Emergency Mobile Information & Communication System: A portable long range IOT device.</p>
              <Link to="/emics"> Website Description </Link>
              <a href="http://www.emi-cs.com"> Website Link </a>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">
              <h2>Testo Photography</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Link to="/testophotography"> Testo Photography </Link>
              <a href="http://www.testophotography.com"> Website Link </a>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">
              <h2>Canvas Prints</h2>
              <p>An ecommerce website</p>
              <Link to="/prints"> Canvas Prints for Sale </Link>
              <a href="http://www.testophotography.com/prints"> Website Link </a>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">
              <h2>Sangria New York City</h2>
              <p>A community sangria recipe database.</p>
              <Link to="/sangria"> Sangria New York City </Link>
              <a href="http://www.sangrianewyorkcity.com"> Website Link </a>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">
              <h2>Quick Starter</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Link to="/contact"> Quick Starter </Link>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default TopNavComp;
