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

import { DividedSection } from '~components/Sections';
import AppNav from '~components/AppNav';
import SideNav, { useDrawer } from '~components/Drawer';

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
  headerBannerImage: {
    // background: '#ff00ff',
    display: 'flex',
    height: '30vh',
    flexDirection: 'column',
    padding: '1em',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    backgroundSize: 'cover',
  },
});
const routes = [
  {
    route: '/',
  },
];

const HomePage = props => {
  const classes = useStyles();
  const { open, toggleOpen } = useDrawer();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppNav />
        <DividedSection
          image="/images/dissapearing-restaurant-alt.svg"
          color="#97C3FF"
          height="30vh"
          LeftSection={() => {
            return (
              <React.Fragment>
                <Typography variant="h4" component="h1" gutterBottom>
                  They've Served you now support them
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  75% of small businesses are at risk, help ensure they are still there when this is
                  over.
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn More
                </Button>
              </React.Fragment>
            );
          }}
        />
        {/*<div className={classes.fullWidthRight}>{''}</div>*/}
        <Grid container>
          <h2>Grid</h2>
        </Grid>
        <Container className={classes.root} maxWidth="lg">
          <h2>Container</h2>
        </Container>
      </div>
      <SideNav routes={routes} opened={open} onClose={toggleOpen} toggleDrawer={toggleOpen} />
    </React.Fragment>
  );
};

export default withApollo({ ssr: true })(HomePage);
