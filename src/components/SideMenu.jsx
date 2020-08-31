import React, { useRef } from 'react';
import { Link } from 'gatsby';

import useKeyPress from '../hooks/useKeyPress';
import useOutsideClick from '../hooks/useOutsideClick';

const SideMenu = ({ openSide, setOpenSide }) => {
  const ref = useRef();

  const closeSideMenu = () => {
    if (openSide) {
      setOpenSide(false);
    }
  }

  useOutsideClick(ref, () => {
    closeSideMenu();
  });

  useKeyPress('Escape', () => {
    closeSideMenu();
  })

  return (
    <div className={ 'side-menu' + (openSide ? ' side-menu--active' : '') }>
      <div className="side-menu__content" ref={ ref }>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contacto/">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
