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
import IndexPageStyles from '~theme/IndexPageStyles';
import { Typography } from '@material-ui/core';

// layout related

// prebuilt theme related
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';

const useStyles = makeStyles(IndexPageStyles);

const ParticipatingRestaurants = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12}>
            <Typography variant="h5" className={classes.title}>
              Participating Restaurants
            </Typography>
            <GridContainer>
              <GridItem xs={6} sm={3}>
                <Typography variant="subtitle1">San Francisco, CA</Typography>
                <hr />
                <ul>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                </ul>
              </GridItem>
              <GridItem xs={6} sm={3}>
                <Typography variant="subtitle1">San Francisco, CA</Typography>
                <hr />
                <ul>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                </ul>
              </GridItem>
              <GridItem xs={6} sm={3}>
                <Typography variant="subtitle1">San Francisco, CA</Typography>
                <hr />
                <ul>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                </ul>
              </GridItem>
              <GridItem xs={6} sm={3}>
                <Typography variant="subtitle1">San Francisco, CA</Typography>
                <hr />
                <ul>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                  <li>Commis</li>
                </ul>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default ParticipatingRestaurants;
