import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
// import Config from "~config";
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IndexPageStyles from '~theme/IndexPageStyles';
import { Typography } from '@material-ui/core';

// layout related
import Layout from '~components/Layout';
import Header from '~components/Header';

import NavLinks from '~components/Header/NavLinks';
import HomeHeader from '~components/HomeHeader';

// prebuilt theme related
import Footer from '~theme/prebuilt/components/Footer/Footer.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import HeaderLinks from '~theme/prebuilt/components/Header/HeaderLinks.js';
import Parallax from '~theme/prebuilt/components/Parallax/Parallax.js';
import Card from '~theme/prebuilt/components/Card/Card';
import CardBody from '~theme/prebuilt/components/Card/CardBody';
import CustomInput from '~theme/prebuilt/components/CustomInput/CustomInput';
import InfoArea from '~theme/prebuilt/components/InfoArea/InfoArea.js';
import ParticipatingRestaurants from '~components/ParticipatingRestaurants';
import PageContentSection from '~components/PageContentSection';
import Subscribe from '~components/Subscribe';

const useStyles = makeStyles(IndexPageStyles);

const IndexPage = ({ ...rest }) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = React.useState();
  const img =
    'https://images.unsplash.com/photo-1495299458363-c7d39bb37892?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80';
  return (
    <>
      {/*<Header color="primary" fixed appBar absolute brand="Dine Forward" links={<NavLinks />} /> */}
      <Parallax image={img} className={classes.headerHero}>
        <HomeHeader />
      </Parallax>
      <PageContentSection>
        <ParticipatingRestaurants />
      </PageContentSection>
      <Subscribe />;
    </>
  );
};

// export const getStaticProps = async () => {
//   // const page = await getPageByName('Home');
//   return {
//     props: {},
//   };
// };

export default IndexPage;
