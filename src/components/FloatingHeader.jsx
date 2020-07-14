import React, { useState, useEffect } from 'react';

const FloatingHeader = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      setActive(window.pageYOffset > 100);
    }

    document.addEventListener('scroll', scrollListener);

    return () => {
      document.removeEventListener('scroll', scrollListener);
    }
  })

  return (
    <div className={ 'floating-header' + (active ? ' floating-header--active' : '') }>
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
        <span>Título del post</span>
      </div>
      <div className="floating-header__share">
        <button
          className="header__button"
          aria-label={ 'Compartir' }
          title={ 'Compartir' }
        >
          <i className="icon icon--share"></i>
        </button>
      </div>
    </div>
  );
}

export default FloatingHeader;
