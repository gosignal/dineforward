import React from 'react';
import {
  Grid,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withApollo } from '~utils/apollo';
// import ParticipatingRestaurants from '~components/ParticipatingRestaurants';
import Subscribe from '~components/Subscribe';
import AppNav from '~components/AppNav';
import { HowItWorks, HeroBannerSection } from '~containers/Sections';
import HomePageLayout from '~containers/Layouts/homepage.layout';

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
});

const Image = () => {
  return <img src="" />;
};

const HomePage = props => {
  const classes = useStyles();
  return (
    <HomePageLayout>
      <AppNav />
      <HeroBannerSection />
      <Grid container>
        <HowItWorks />
      </Grid>
      <Container className={classes.root} maxWidth="lg">
        <Subscribe />
      </Container>
    </HomePageLayout>
  );
};

export default withApollo({ ssr: true })(HomePage);
