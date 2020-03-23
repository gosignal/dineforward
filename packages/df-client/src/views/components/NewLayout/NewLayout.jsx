import React, { Fragment } from 'react';
import Head from 'next/head';
import ContentPage from '~containers/ContentPage';
import Footer from '~containers/Footer';

import NavBar from '~components/NavBar';

import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';

export default props => {
  const { navbar, children } = props;
  return (
    <CharityWrapper>
      {navbar ? <NavBar /> : null}
      <React.Fragment>{children}</React.Fragment>
      <Footer />
    </CharityWrapper>
  );
};
