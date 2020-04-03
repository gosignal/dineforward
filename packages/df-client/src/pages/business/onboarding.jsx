import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import { withIdentityRequired } from '~utils/withIdentity';

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

const steps = [
  {
    name: 'Contact info',
    Component: OnboardingStep1,
  },
  {
    name: 'About your restaurant',
    Component: OnboardingStep2,
  },
  // {
  //   name: 'Photos',
  //   Component: OnboardingStep3,
  // },
  {
    name: 'Done!',
    Component: OnboardingStep4,
  },
];

const OnboardingPage = () => {
  const classes = useStyles();
  const stepClasses = {
    root: classes.stepRoot,
    buttonBox: classes.buttonBox,
    stepTitle: classes.stepTitle,
  };
  const [ businessId, setBusinessId ] = useState(undefined);

  return (
    <ContentPageLayout className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">Welcome to DineForward!</Typography>
        </Grid>
        <Grid item xs={12}>
          <WizardSteps
            allSteps={steps}
            businessId={businessId}
            classes={stepClasses}
            setBusinessId={setBusinessId}
          />
        </Grid>
      </Grid>
    </ContentPageLayout>
  );
};

export default withIdentityRequired(OnboardingPage);
