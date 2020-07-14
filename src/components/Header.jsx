import React, { useState } from 'react';
import { Link } from 'gatsby';

import DarkToggle from './DarkToggle';
import FloatingHeader from './FloatingHeader';
import Hamburger from './Hamburger';
import SideMenu from './SideMenu';

import Logo from '../assets/logo.svg';

const Header = ({ post }) => {
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
      <SideMenu openSide={ openSide } setOpenSide={ setOpenSide } />
      <FloatingHeader post={ post } />
    </>
  );
}

export default Header;
