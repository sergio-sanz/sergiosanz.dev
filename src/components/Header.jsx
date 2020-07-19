import React, { useState } from 'react';
import { Link } from 'gatsby';

import DarkToggle from './DarkToggle';
import FloatingHeader from './FloatingHeader';
import Hamburger from './Hamburger';
import SideMenu from './SideMenu';

import Logo from '../assets/logo.svg';

const Header = ({ page, post }) => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <>
      { /* Cabecera principal */ }
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

      { /* Menú lateral desplegable con el botón de hamburguesa */ }
      <SideMenu openSide={ openSide } setOpenSide={ setOpenSide } />

      { /* Si se recibe información sobre la página se renderiza la cabecera flotante */ }
      { typeof page !== 'undefined' &&
        <FloatingHeader page={ page } post={ post } />
      }
    </>
  );
}

export default Header;
