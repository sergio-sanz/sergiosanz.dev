import React from 'react';
import { Link } from 'gatsby';

import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__hamburger">
        <button className="header__button">
          <i class="icon icon--menu"></i>
        </button>
      </div>
      <div className="header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__dark">
        <button className="header__button">
          <i class="icon icon--moon"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
