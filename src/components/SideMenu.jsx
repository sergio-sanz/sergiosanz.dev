import React, { useRef } from 'react';
import { Link } from 'gatsby';

import useOutsideClick from '../hooks/useOutsideClick';

const SideMenu = ({ openSide, setOpenSide }) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (openSide) {
      setOpenSide(false);
    }
  });

  return (
    <div className={ 'side-menu' + (openSide ? ' side-menu--active' : '') }>
      <div className="side-menu__content" ref={ ref }>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
