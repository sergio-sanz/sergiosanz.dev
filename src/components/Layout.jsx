import React, { useRef } from 'react';
import 'focus-visible';

import Footer from './Footer';
import Header from './Header';

import '../styles/main.scss';

const Layout = props => {
  const post = useRef();
  return (
    <>
      <Header page={ props.page } post={ post } />
      <main className="main" ref={ post }>
        { props.children }
      </main>
      <Footer />
    </>
  );
}

export default Layout;
