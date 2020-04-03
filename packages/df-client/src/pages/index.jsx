import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import { withApollo } from '~utils/apollo';
// import ParticipatingRestaurants from '~components/ParticipatingRestaurants';
// import Subscribe from '~components/Subscribe';
import AppNav from '~components/AppNav';
import HeroBannerSection from '~containers/Sections/HeroBanner';
import HowItWorks from '~containers/Sections/HowItWorks';
import QuoteSection from '~containers/Sections/QuoteSection';
import HomePageLayout from '~containers/Layouts/homepage.layout';

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
  buttonBox: {
    marginBottom: '50px',
    marginTop: '50px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  restaurantButton: {
    paddingBottom: '1.2em',
    paddingTop: '1.2em',
  },
});

const RestaurantButton = ({ classes }) => (
  <Grid container className={classes.buttonBox} justify="center">
    <Grid item sm={8} xs={12}>
      <Link href="/restaurants">
        <Button
          color="primary"
          fullWidth
          classes={{ root: classes.restaurantButton }}
          variant="contained"
          size="large"
        >
          Are you a restaurant?
        </Button>
      </Link>
    </Grid>
  </Grid>
);

const HomePage = props => {
  const classes = useStyles();
  return (
    <HomePageLayout>
      <AppNav />
      <HeroBannerSection />
      <HowItWorks />
      <RestaurantButton classes={classes} />
      <QuoteSection />
    </HomePageLayout>
  );
};

export default withApollo({ ssr: true })(HomePage);
