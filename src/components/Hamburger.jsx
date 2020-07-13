import React from 'react';

const Hamburger = props => {
  const label = () => {
    return props.openSide ? 'Cerrar menú' : 'Abrir menú';
  }

  return (
    <button
      className="header__button"
      role="switch"
      aria-checked={ props.openSide ? 'true' : 'false' }
      aria-label={ label() }
      title={ label() }
      onClick={ () => props.setOpenSide(!props.openSide) }
    >
      <i className={ 'icon icon--menu' + (props.openSide ? ' icon--active' : '') }></i>
    </button>
  );
}

export default Hamburger;
