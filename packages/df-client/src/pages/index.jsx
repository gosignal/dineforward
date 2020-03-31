import React from 'react';
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
import { makeStyles } from '@material-ui/styles';
import { withApollo } from '~utils/apollo';
import ParticipatingRestaurants from '~components/ParticipatingRestaurants';
import Subscribe from '~components/Subscribe';
import AppNav from '~components/AppNav';
import { useDrawer } from '~components/Drawer';
import { HowItWorks, HeroBannerSection } from '~containers/Sections';
import HomePageLayout from '~containers/Layouts/homepage.layout';

const useStyles = makeStyles({
  root: {
    padding: 0,
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

const HomePage = props => {
  const classes = useStyles();
  const { open, toggleOpen } = useDrawer();
  return (
    <HomePageLayout>
      <AppNav />
      <HeroBannerSection />
      <Grid container>
        <HowItWorks />
      </Grid>
      <Container className={classes.root} maxWidth="lg">
        <ParticipatingRestaurants />
        <Subscribe />
      </Container>
    </HomePageLayout>
  );
};

export default withApollo({ ssr: true })(HomePage);
