
import React from 'react';
import { Link } from 'react-router-dom'

export const BottomNavComp = () => (
  <div>
    <div className="bottomAccordion accordion">
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
              <h2>Contact Me</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Link to="/contact"> Contact Me </Link>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default BottomNavComp;
