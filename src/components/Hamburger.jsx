import React, { useState } from 'react';

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const label = () => {
    return active ? 'Cerrar menú' : 'Abrir menú';
  }

  return (
    <button
      className="header__button"
      role="switch"
      aria-checked={ active ? 'true' : 'false' }
      aria-label={ label() }
      title={ label() }
      onClick={ () => setActive(!active) }
    >
      <i className={ 'icon icon--menu' + (active ? ' icon--active' : '') }></i>
    </button>
  );
}

export default Hamburger;
