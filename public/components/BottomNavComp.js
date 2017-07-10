
import React from 'react';
import { Link } from 'react-router-dom'

export const BottomNavComp = () => (
  <div>
    <div className="bottomAccordion accordion">
      <ul>
        <li>
          <div>
            <Link to="/biopage">
              <h2>About Me</h2>
              <p>My name is Gregory Testo and here is some interesting things about me.</p>
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/contact">
              <h2>Contact Me</h2>
              <p>The best way to contact me is...</p>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default BottomNavComp;
