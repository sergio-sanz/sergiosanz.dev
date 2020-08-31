import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__copyright">
          <span>© { new Date().getFullYear() } Sergio Sanz</span>
        </div>
        <div className="footer__links">
          <ul>
            <li>
              <Link to="/aviso-legal/">Aviso legal</Link>
            </li>
            <li>
              <Link to="/politica-privacidad/">Política de privacidad</Link>
            </li>
            <li>
              <Link to="/cookies/">Cookies</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
