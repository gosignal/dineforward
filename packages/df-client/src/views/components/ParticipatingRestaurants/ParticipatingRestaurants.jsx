import React from 'react';
// import Link from 'next/link';
// import Router from 'next/router';
// import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';
// // import Config from "~config";
// import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  title: {},
});

const ParticipatingRestaurants = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.title}>
          Participating Restaurants
        </Typography>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1">San Francisco, CA</Typography>
            <hr />
            <ul>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
            </ul>
          </Grid>
          <Grid xs={6} sm={3}>
            <Typography variant="subtitle1">San Francisco, CA</Typography>
            <hr />
            <ul>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1">San Francisco, CA</Typography>
            <hr />
            <ul>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1">San Francisco, CA</Typography>
            <hr />
            <ul>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
              <li>Commis</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ParticipatingRestaurants;
