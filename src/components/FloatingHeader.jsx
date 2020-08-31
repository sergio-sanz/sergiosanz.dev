import React, { useState, useEffect } from 'react';

import ReadingProgress from './ReadingProgress';
import ShareBar from './ShareBar';

const FloatingHeader = ({ page, post }) => {
  const [active, setActive] = useState(false);

  // Añade un 'scroll listener' para activar el encabezado flotante
  useEffect(() => {
    const scrollListener = () => {
      setActive(window.pageYOffset > 100);
    }

    document.addEventListener('scroll', scrollListener);

    return () => {
      document.removeEventListener('scroll', scrollListener);
    }
  });

  return (
    <div className={ 'floating-header' + (active ? ' floating-header--active' : '') }>
      <div className="floating-header__content">
        <div className="floating-header__top">
          <button
            className="header__button"
            aria-label={ 'Volver arriba' }
            title={ 'Volver arriba' }
            onClick={ () => window.scroll({ top: 0, behavior: 'smooth' }) }
          >
            <i className="icon icon--arrow-up"></i>
          </button>
        </div>
        <div className="floating-header__heading">
          <span>{ page.title }</span>
        </div>
        <ShareBar page={ page } />
      </div>
      <ReadingProgress target={ post } />
    </div>
  );
}

export default FloatingHeader;
