import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const stepTitle = `And you're done!`;
const stepDescription = `We will send you your finished profile page when it's ready!`;

const useStyles = makeStyles({
  root: {
    marginTop: '200px',
    paddingTop: '200px',
  },
  container: {
    marginTop: '200px',
  },
});

const OnboardingStep4 = props => {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.container} direction="column" alignItems="center">
      <Grid item md={12}>
        <Typography variant="subtitle1">{stepTitle}</Typography>
        <Typography variant="body1">{stepDescription}</Typography>
        <Typography variant="body1">
          If you have any changes or questions, please email us
          at <a href="mailto:restaurants@dineforward.org">restaurants@dineforward.org</a>.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default OnboardingStep4;
