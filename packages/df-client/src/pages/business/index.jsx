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
import ContentPageLayout from '~containers/Layouts/contentpage.layout';

const useStyles = makeStyles({
  root: {
    marginTop: 200,
  },
});

const Image = () => {
  return <img src="" />;
};

const HomePage = props => {
  const classes = useStyles();
  const { open, toggleOpen } = useDrawer();
  return (
    <ContentPageLayout className={classes.root}>
      <Container className={classes.root} maxWidth="lg">
        <Typography variant="h2">Become a restaurant</Typography>
        <Typography variant="body1">Why you should join</Typography>
      </Container>
    </ContentPageLayout>
  );
};

export default withApollo({ ssr: true })(HomePage);
