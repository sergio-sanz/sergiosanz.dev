import React, { useState } from 'react';
import { Link } from 'gatsby';

import DarkToggle from './DarkToggle';
import Hamburger from './Hamburger';
import SideMenu from './SideMenu';

import Logo from '../assets/logo.svg';

const Header = () => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__hamburger">
          <Hamburger openSide={ openSide } setOpenSide={ setOpenSide } />
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
      <SideMenu openSide={ openSide } />
    </>
  );
}

export default Header;
