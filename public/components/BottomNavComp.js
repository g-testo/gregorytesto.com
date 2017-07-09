
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
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">
              <h2>Contact Me</h2>
              <Link to="/contact"> Contact Me </Link>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default BottomNavComp;
