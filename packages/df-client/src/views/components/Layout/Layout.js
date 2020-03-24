import React from 'react';
import LayoutHeader from './LayoutHeader';
// import Menu from './Menu';
// import LayoutFooter from './LayoutFooter';

const Layout = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div>
      <LayoutHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
