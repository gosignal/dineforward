import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import Alert from '@material-ui/lab/Alert';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import { makeStyles } from '@material-ui/core/styles';

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
        label: 'Tell us about your restaurant',
        group: group1,
        multiline: true,
        rows: 5,
        placeholder:
          `Example: Nick's on Grand is a vegan Filipino restaurant located in ` +
          `San Bruno, CA. We are raising money to support our staff and keep ` +
          `our restaurants open.`
      },
      {
        name: 'status',
        label: 'Are you...',
        group: group1,
        type: 'select',
        options: [
          {
            label: 'Takeout',
            value: 'takeout',
          },
          {
            label: 'Delivery',
            value: 'delivery',
          },
          {
            label: 'Limited',
            value: 'limited',
          },
          {
            label: 'Closed',
            value: 'closed',
          },
        ],
      },
      {
        name: 'website',
        label: 'Website',
        group: group1,
        placeholder: 'Example: www.nicksongrand.com',
      },
      {
        name: 'instagram',
        label: 'Instagram',
        group: group1,
        placeholder: 'Example: @nicksongrand',
      },
      {
        name: 'giftcardLink',
        label: 'Do you have a place where customers can purchase gift cards?',
        group: group1,
        placeholder: 'Example: www.nicksongrand.com/giftcards',
      },
      {
        name: 'donationlink',
        label: 'Do you have an existing site set up to accept donations?',
        group: group1,
        placeholder: 'Example: www.gofundme.com/...',
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
  }
});

const OnboardingStep2 = props => {
  const { forward, back } = props;
  const classes = useStyles();

  const onSubmit = (data, { setSubmitting }) => {
    forward();
  };

  const errorMsg = null;

  return (
    <Grid container spacing={5} className={classes.container} direction="column" alignItems="center">
      {errorMsg && (
        <Grid item md={12}>
          <Alert severity="error">{errorMsg}</Alert>
        </Grid>
      )}
      <Grid item md={12}>
        <Typography variant="subtitle1">{stepTitle}</Typography>
        <Typography variant="body1">{stepDescription}</Typography>
        <ComplexFormBuilder
          schema={requestBizForm.form}
          formAction={onSubmit}
        >
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
