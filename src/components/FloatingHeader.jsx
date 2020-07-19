import React, { useState, useEffect } from 'react';

import ReadingProgress from './ReadingProgress';

import FacebookIcon from '../assets/facebook.svg';
import TwitterIcon from '../assets/twitter.svg';
import WhatsappIcon from '../assets/whatsapp.svg';

const FloatingHeader = ({ page, post }) => {
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
        <div className="floating-header__share">
          <ul className="floating-header__social">
            <li>
              <a className="social-icon social-icon--facebook" href={ `https://www.facebook.com/sharer.php?u=${window.location.href}` } target="_blank" rel="noreferrer" title="Compartir en Facebook">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a className="social-icon social-icon--twitter" href={ `https://twitter.com/intent/tweet?url=${window.location.href}&text=${page.title}` } target="_blank" rel="noreferrer" title="Compartir en Twitter">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a className="social-icon social-icon--whatsapp" href={ `whatsapp://send?text=${page.title} ${window.location.href}` }>
                <WhatsappIcon />
              </a>
            </li>
          </ul>
          <button
            className="header__button"
            aria-label={ 'Compartir' }
            title={ 'Compartir' }
          >
            <i className="icon icon--share"></i>
          </button>
        </div>
      </div>
      <ReadingProgress target={ post } />
    </div>
  );
}

export default FloatingHeader;
