import React from 'react';

import useDarkMode from '../hooks/useDarkMode';

const DarkToggle = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button className="header__button" onClick={ () => toggleTheme() }>
      <i className={theme === 'dark' ? 'icon icon--sun' : 'icon icon--moon'}></i>
    </button>
  );
}

export default DarkToggle;
