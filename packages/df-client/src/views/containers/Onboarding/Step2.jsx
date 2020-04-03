import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import Alert from '@material-ui/lab/Alert';
import ComplexFormBuilder from '~components/ComplexFormBuilder';

const stepTitle = `Please tell us more about how your customers can connect with you`;
const stepDescription = '';

const group1 = '';
const requestBizForm = {
  form: {
    name: 'Setup your profile',
    fieldgroups: [group1],
    fields: [
      {
        name: 'description',
        description: 'Tell us about your restaurant',
        group: group1,
        multiline: true,
        rows: 5,
        placeholder:
          `Example: Nick's on Grand is a vegan Filipino restaurant located in ` +
          `San Bruno, CA. We are raising money to support our staff and keep ` +
          `our restaurants open.`,
      },
      {
        name: 'status',
        description: 'Are you currently:',
        group: group1,
        type: 'select',
        options: [
          {
            label: 'Open',
            value: 'open',
          },
          {
            label: 'Takeout/Delivery Only',
            value: 'takeout',
          },
          {
            label: 'Temporarily Closed',
            value: 'closed',
          },
        ],
      },
      {
        name: 'website',
        description: 'Website',
        group: group1,
        placeholder: 'Example: www.nicksongrand.com',
      },
      {
        name: 'instagram',
        description: 'Instagram',
        group: group1,
        placeholder: 'Example: @nicksongrand',
      },
      {
        name: 'giftcardLink',
        description: 'Do you have a place where customers can purchase gift cards?',
        group: group1,
        placeholder: 'Example: www.nicksongrand.com/giftcards',
      },
      {
        name: 'donationlink',
        description: 'Do you have an existing site set up to accept donations?',
        group: group1,
        placeholder: 'Example: www.gofundme.com/...',
      },
    ],
  },
};

const OnboardingStep2 = ({ back, classes, forward }) => {

  const onSubmit = (data, { setSubmitting }) => {
    forward();
  };

  const errorMsg = null;

  return (
    <Grid
      container
      spacing={5}
      className={classes.root}
      direction="column"
      alignItems="center"
    >
      {errorMsg && (
        <Grid item md={12}>
          <Alert severity="error">{errorMsg}</Alert>
        </Grid>
      )}
      <Grid item md={8} xs={12}>
        <Typography variant="subtitle1" className={classes.stepTitle}>{stepTitle}</Typography>
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
export default OnboardingStep2;
