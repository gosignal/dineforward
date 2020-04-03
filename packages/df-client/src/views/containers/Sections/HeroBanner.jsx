import React from 'react';
import {
  Grid,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import Link from 'next/link';
import { DividedSection } from '~components/Sections';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
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
const HeroBannerSection = props => {
  const classes = useStyles();
  return (
    <DividedSection
      className={classes.heroSection}
      image={'/images/dissapearing-restaurant-dark.svg'}
      color="#FFCA24"
      height="55vh"
      LeftSection={() => {
        return (
          <React.Fragment>
            <Typography variant="h4" component="h1" gutterBottom className={classes.heroMessage}>
              They've served you, now support them.
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.heroSubMessage}>
              75% of independent restaurant are at risk, help them survive COVID-19 closures by
              dining forward.
            </Typography>
            <Link href="#how-it-works">
              <Button size="large" variant="contained" color="secondary" className={classes.heroCTA}>
                Learn More
              </Button>
            </Link>
          </React.Fragment>
        );
      }}
    />
  );
};

export default HeroBannerSection;
