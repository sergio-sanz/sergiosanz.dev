import React from 'react';

import Header from './Header';

import '../styles/main.scss';

const Layout = props => {
  return (
    <>
      <Header />
      <div>{ props.children }</div>
    </>
  );
}

export default Layout;
