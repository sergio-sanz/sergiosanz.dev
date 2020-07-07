import React from 'react';
import { Link } from 'gatsby';

import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__hamburger">

      </div>
      <div className="header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__dark">

      </div>
    </header>
  );
}

export default Header;
