import React, { useCallback } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import Alert from '@material-ui/lab/Alert';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import { makeStyles } from '@material-ui/core/styles';

const stepTitle = `Now we need some pictures - say cheese!`;
const stepDescription =
  '(If you want to do this later, you will be able to upload from your dashboard or email us to do it for you.)';

const group1 = '';
const requestBizForm = {
  form: {
    name: 'Setup your profile',
    fieldgroups: [group1],
    fields: [
      {
        name: 'profilePicture',
        label: 'Upload a profile picture for your restaurant',
        // type: 'file',
        group: group1,
      },
      {
        name: 'headerImage',
        label: 'Upload a header image for your restaurant page',
        // type: 'text',
        group: group1,
      },
    ],
  },
};

const useStyles = makeStyles({
  root: {
    marginTop: '200px',
    paddingTop: '200px',
  },
  container: {
    marginTop: '50px',
  },
  buttonBox: {
    paddingTop: '1em',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
});

const OnboardingStep3 = props => {
  const { forward, back } = props;
  const classes = useStyles();

  const onSubmit = (data, { setSubmitting }) => {
    forward();
  };

  const errorMsg = null;

  return (
    <Grid
      container
      spacing={5}
      className={classes.container}
      direction="column"
      alignItems="center"
    >
      {errorMsg && (
        <Grid item md={12}>
          <Alert severity="error">{errorMsg}</Alert>
        </Grid>
      )}
      <Grid item md={12}>
        <Typography variant="subtitle1">{stepTitle}</Typography>
        <Typography variant="body1">{stepDescription}</Typography>
        <ComplexFormBuilder schema={requestBizForm.form} formAction={onSubmit}>
          {({ isSubmitting }) => (
            <Box display="flex" justifyContent="flex-end" className={classes.buttonBox}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                endIcon={<DoubleArrow />}
              >
                Next
              </Button>
            </Box>
          )}
        </ComplexFormBuilder>
      </Grid>
    </Grid>
  );
};
export default OnboardingStep3;
