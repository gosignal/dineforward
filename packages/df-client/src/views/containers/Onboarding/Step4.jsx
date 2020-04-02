import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const stepTitle = `And you're done!`;

const OnboardingStep4 = ({ classes })=> {
  return (
    <Grid container spacing={5} className={classes.root} direction="column" alignItems="center">
      <Grid item sm={8} xs={10}>
        <Typography variant="h3">{stepTitle}</Typography>
        <Typography variant="subtitle1">Next Steps:</Typography>
        <Typography variant="body1" paragraph>
          Please <a href="mailto:restaurants@dineforward.org">email us</a> a profile image and header image to personalize your page. Here is a sample profile page for reference.
        </Typography>
        <Typography variant="body1" paragraph>
          Then, we will send you your finished profile page when it's ready! 
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any changes or questions, please email us
          at <a href="mailto:restaurants@dineforward.org">restaurants@dineforward.org</a>.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default OnboardingStep4;
