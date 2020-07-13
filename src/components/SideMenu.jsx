import React from 'react';
import { Link } from 'gatsby';

const SideMenu = ({ openSide }) => {
  return (
    <div className={ 'side-menu' + (openSide ? ' side-menu--active' : '') }>
      <div className="side-menu__content">
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
