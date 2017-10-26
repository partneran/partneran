import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="copyright pull-right">
          &copy; 2016 made with <i className="fa fa-heart heart" /> by Partneran
          team
        </div>
        <nav className="pull-left">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="explore">Explore</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="share-idea">Share Idea</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
