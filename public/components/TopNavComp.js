import React from 'react';
import { Link } from 'react-router-dom'

export const TopNavComp = () => (
  <div>
    <div className="topAccordion accordion">
      <ul>
        <li>
          <div>
            <Link to="/">
              <h2>gregorytesto.com</h2>
              <p>This is an accumulation of my work. Take a look around.</p>
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/emics">
                <h2>EMICS</h2>
                <p>Emergency Mobile Information & Communication System: A portable long range IOT device.</p>
              </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/testophotography">
              <h2>Testo Photography</h2>
              <p>This is my personal photography website. I hope you enjoy your visit.</p>
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/prints">
              <h2>Canvas Prints</h2>
              <p>An ecommerce website selling canvas prints. Window shoppers not just accepted but encouraged.</p>
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/sangria">
              <h2>Sangria NYC</h2>
              <p>A New York City community sangria recipe database.</p>
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/quickstarter">
              <h2>Quick Starter</h2>
              <p>This is my crowdfunding page for my canvas prints, photo book and my EMICS project.</p>
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/photobot">
              <h2>Photo Bot</h2>
              <p>2nd Edition Ver. 2.31</p>
              <p>A voice activated photography web app that provides photo tips and locations.</p>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default TopNavComp;
