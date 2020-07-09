import React from 'react';

import Footer from './Footer';
import Header from './Header';

import '../styles/main.scss';

const Layout = props => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="wrapper">
          { props.children }
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
