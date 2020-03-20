import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '~theme/sp-theme/elements/UI/Logo';
import Image from '~theme/sp-theme/elements/Image';
import Container from '~theme/sp-theme/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

// import logoImage from '/images/logo.svg';
// import heartImage from '/images/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Logo href="/" logoSrc="/Logo.svg" title="DineForward" />
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="/register" offset={81}>
            Are you a business?
          </AnchorLink>
          <Button>
            <span className="text">Login</span>
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
