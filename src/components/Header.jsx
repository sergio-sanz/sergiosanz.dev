import React from 'react';
import { Link } from 'gatsby';

import DarkToggle from './DarkToggle';

import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__hamburger">
        <button className="header__button">
          <i className="icon icon--menu"></i>
        </button>
      </div>
      <div className="header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__dark">
        <DarkToggle />
      </div>
    </header>
  );
}

export default Header;
