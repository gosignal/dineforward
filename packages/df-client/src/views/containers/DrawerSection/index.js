import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Drawer from '~theme/sp-theme/elements/Drawer';
import Image from '~theme/sp-theme/elements/Image';
import { DrawerContext } from '~utils/contexts/DrawerContext';
import InnerWrapper, { SpreadButton } from './drawerSection.style';

import { menuItems } from '~config/stubData';

const DrawerSection = () => {
  const [toggleState, setToggleState] = useState(false);

  const { state, dispatch } = useContext(DrawerContext);
  const handleActiveClass = () => {
    setToggleState(!toggleState);
  };

  const handleDrawerToggle = () => {
    dispatch({
      type: 'TOGGLE',
    });
    handleActiveClass();
  };

  const scrollItems = [];

  menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });
  const router = useRouter();
  return (
    <Drawer
      width="420px"
      placement="right"
      drawerHandler={
        <button
          className={`drawer_btn ${toggleState ? 'active' : ''}`}
          onClick={handleActiveClass}
          aria-label="drawer toggle button"
        >
          <ul className="grid">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <i className="flaticon-plus-symbol " />
        </button>
      }
      open={state.isOpen}
      toggleHandler={handleDrawerToggle}
    >
      <InnerWrapper>
        <div className="scrollspy__menu">
          {menuItems.map((menu, index) => (
            <li key={`menu_key${index}`}>
              <Link href={menu.path}>
                <a>{menu.label}</a>
              </Link>
            </li>
          ))}
        </div>
        <SpreadButton>
          <Link href="/signin">
            <a>
              <span className="text">Login</span>
            </a>
          </Link>
        </SpreadButton>
      </InnerWrapper>
    </Drawer>
  );
};

export default DrawerSection;
