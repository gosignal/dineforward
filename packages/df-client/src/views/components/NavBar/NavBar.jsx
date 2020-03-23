import React from 'react';
import Sticky from 'react-stickynode';
import Navbar from '~containers/Navbar'; //todo: rename this
import { DrawerProvider } from '~utils/contexts/DrawerContext';
import DrawerSection from '~containers/DrawerSection';

const NavBar = () => {
  return (
    <React.Fragment>
      <Sticky enabled={true} top={0} innerZ={9999} activeClass="sticky-nav-active">
        <Navbar />
      </Sticky>
      <DrawerProvider>
        <DrawerSection />
      </DrawerProvider>
    </React.Fragment>
  );
};

export default NavBar;
