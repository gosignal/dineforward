import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';
import Logo from '~theme/sp-theme/elements/UI/Logo';
import Image from '~theme/sp-theme/elements/Image';
import Container from '~theme/sp-theme/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import styled from 'styled-components';
// import logoImage from '/images/logo.svg';
// import heartImage from '/images/heart-red.png';

const LogoWrapper = styled.div`
  width: 100%;
  text-align: left;
  float: left;
  img {
    width: 100%;
    @media only screen and (max-width: 1360px) {
      width: 100%;
    }
    @media only screen and (max-width: 991px) {
      width: 90%;
    }
    @media only screen and (max-width: 667px) {
      width: 75%;
    }
  }
`;

const StyledLogo = styled(Logo);

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <LogoWrapper>
          <Logo href="/" logoSrc="/Logo.svg" title="DineForward" />
        </LogoWrapper>
        <MenuWrapper>
          <Link href="/business">
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
