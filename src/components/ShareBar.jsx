import React, { useRef, useState } from 'react';

import ShareToggle from './ShareToggle';

import FacebookIcon from '../assets/facebook.svg';
import TwitterIcon from '../assets/twitter.svg';
import WhatsappIcon from '../assets/whatsapp.svg';

const ShareBar = ({ page }) => {
  const [active, setActive] = useState(false);
  const shareLinks = useRef(null);

  const toggleShare = () => {
    if (active) {
      setActive(false);
      setTimeout(() => shareLinks.current.style.display = 'none', 200);
    } else {
      shareLinks.current.style.display = 'block';
      setTimeout(() => setActive(true), 1);
    }
  }

  return (
    <div className={ 'floating-header__share' + (active ? ' floating-header__share--active' : '') }>
      <ul className="floating-header__social" ref={ shareLinks }>
        <li>
          <a className="social-icon social-icon--facebook" href={ typeof window !== 'undefined' ? `https://www.facebook.com/sharer.php?u=${window.location.href}` : '' } target="_blank" rel="noreferrer" title="Compartir en Facebook">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a className="social-icon social-icon--twitter" href={ typeof window !== 'undefined' ? `https://twitter.com/intent/tweet?url=${window.location.href}&text=${page.title}` : '' } target="_blank" rel="noreferrer" title="Compartir en Twitter">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a className="social-icon social-icon--whatsapp" href={ typeof window !== 'undefined' ? `whatsapp://send?text=${page.title} ${window.location.href}` : '' }>
            <WhatsappIcon />
          </a>
        </li>
      </ul>
      <ShareToggle active={ active } onClick={ toggleShare } />
    </div>
  );
}

export default ShareBar;
