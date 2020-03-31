import React, { Fragment } from 'react';
import Head from 'next/head';
import {
  Grid,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import { withApollo } from '~utils/apollo';

import theme from '~theme/flux-mui.adapter';
import ParticipatingRestaurants from '~components/ParticipatingRestaurants';
import Subscribe from '~components/Subscribe';
import { DividedSection } from '~components/Sections';
import AppNav from '~components/AppNav';
import SideNav, { useDrawer } from '~components/Drawer';
import { HowItWorks } from '~containers/Sections';

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
  heroSection: {
    marginTop: '400px',
  },
  headerBannerImage: {
    marginTop: '100px',
    display: 'flex',
    height: '55vh',
    flexDirection: 'column',
    padding: '1em',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    backgroundSize: 'cover',
  },
  heroMessage: {
    paddingTop: '50px',
  },
  heroSubMessage: {
    paddingTop: '50px',
  },
  heroCTA: {
    marginTop: '50px',
    padding: '15px 55px',
  },
});
const routes = [
  {
    route: '/',
  },
];
const Image = () => {
  return <img src="" />;
};

const ContentPageLayout = props => {
  const classes = useStyles();
  const { open, toggleOpen } = useDrawer();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppNav />
        <Container className={classes.root} maxWidth="lg">
          {props.children}
        </Container>
      </div>
      <SideNav routes={routes} opened={open} onClose={toggleOpen} toggleDrawer={toggleOpen} />
    </React.Fragment>
  );
};

export default ContentPageLayout;
