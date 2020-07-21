import React, { useState } from 'react';

import ShareToggle from './ShareToggle';

import FacebookIcon from '../assets/facebook.svg';
import TwitterIcon from '../assets/twitter.svg';
import WhatsappIcon from '../assets/whatsapp.svg';

const ShareBar = ({ page }) => {
  const [activeShareToggle, setActiveShareToggle] = useState(false);

  return (
    <div className={ 'floating-header__share' + (activeShareToggle ? ' floating-header__share--active' : '') }>
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
      <ShareToggle active={ activeShareToggle } onClick={ () => setActiveShareToggle(!activeShareToggle) } />
    </div>
  );
}

export default ShareBar;
