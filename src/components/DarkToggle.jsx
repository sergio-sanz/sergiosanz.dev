import React from 'react';

import useDarkMode from '../hooks/useDarkMode';

const DarkToggle = () => {
  const [theme, toggleTheme] = useDarkMode();

  const label = () => {
    return theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro';
  }

  return (
    <button
      className="header__button"
      role="switch"
      aria-checked={ theme === 'dark' ? 'true' : 'false' }
      aria-label={ label() }
      title={ label() }
      onClick={ () => toggleTheme() }
    >
      <i className={ theme === 'dark' ? 'icon icon--sun' : 'icon icon--moon' }></i>
    </button>
  );
}

export default DarkToggle;
