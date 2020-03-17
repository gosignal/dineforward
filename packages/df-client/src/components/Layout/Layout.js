import React from 'react';
import LayoutHeader from './LayoutHeader';
// import Menu from './Menu';
import LayoutFooter from './LayoutFooter';

const Layout = props => {
  const { children } = props;
  return (
    <div>
      <LayoutHeader />
      <main>{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
