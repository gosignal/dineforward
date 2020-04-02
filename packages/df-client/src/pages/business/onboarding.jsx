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
  OnboardingStep4,
} from '~containers/Onboarding';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '200px',
    paddingTop: '200px',
  },
  container: {
    marginTop: '200px',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  progressBar: {
    margin: theme.spacing(1),
  },
  stepRoot: {
    marginTop: '50px',
  },
  buttonBox: {
    paddingTop: '1em',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  stepTitle: {
    lineHeight: '1em',
    paddingBottom: '.7em',
  },
}));

const OnboardingPage = () => {
  const classes = useStyles();
  const stepClasses = {
    root: classes.stepRoot,
    buttonBox: classes.buttonBox,
    stepTitle: classes.stepTitle,
  };

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
                name: 'Contact info',
                Component: props => <OnboardingStep1 classes={stepClasses} {...props} />,
                order: 1,
              },
              {
                name: 'About your restaurant',
                Component: props => <OnboardingStep2 classes={stepClasses} {...props} />,
              },
              // {
              //   name: 'Photos',
              //   Component: props => <OnboardingStep3 classes={stepClasses} {...props} />,
              // },
              {
                name: 'Done!',
                Component: props => <OnboardingStep4 classes={stepClasses} {...props} />,
              },
            ]}
          />
        </Grid>
      </Grid>
    </ContentPageLayout>
  );
};

export default withIdentityRequired(OnboardingPage);
