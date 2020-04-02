import React, { Fragment } from 'react';
import { request } from 'graphql-request';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import { getAllBusinesses } from '~utils/api';
import { withIdentityRequired } from '~utils/withIdentity';

import Grid from '@material-ui/core/Grid';
import {
  WizardSteps,
  OnboardingStep1,
  OnboardingStep2,
  OnboardingStep3,
} from '~containers/Onboarding';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '200px',
    paddingTop: '200px',
  },
  container: {
    marginTop: '200px',
  },
  progressBar: {
    margin: theme.spacing(1),
  },
}));

const BusinessRequestPage = ({ allBusinesses }) => {
  const classes = useStyles();

  return (
    <ContentPageLayout className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">Welcome to DineForward!</Typography>
        </Grid>
        <Grid item xs={12}>
          <WizardSteps
            allSteps={[
              {
                name: 'About your business',
                Component: props => <OnboardingStep1 {...props} />,
                order: 1,
              },
              {
                name: 'About your funding Goals',
                Component: props => <OnboardingStep2 {...props} />,
              },
              {
                name: 'Preview your profile',
                Component: props => <OnboardingStep3 {...props} />,
              },
            ]}
          />
          {/* //technically you can't trust the order of an array, but fuck it -- weird times today.  */}
        </Grid>
      </Grid>
    </ContentPageLayout>
  );
};

export default withIdentityRequired(BusinessRequestPage);
