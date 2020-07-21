import React from 'react';

const ShareToggle = ({ active, onClick }) => {

  return (
    <button
      className="header__button"
      role="switch"
      aria-checked={ active }
      aria-label="Compartir"
      title="Compartir"
      onClick={ onClick }
    >
      <i className="icon icon--share"></i>
    </button>
  );
}

export default ShareToggle;
