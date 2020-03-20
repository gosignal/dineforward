import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';
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
          <Link href="/register">
            <a>Are you a business?</a>
          </Link>
          <Link href="/login">
            <a>
              <Button>
                <span className="text">Login</span>
              </Button>
            </a>
          </Link>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
