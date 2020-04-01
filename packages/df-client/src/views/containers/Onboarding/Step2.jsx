import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import GeoSearchBox from '~components/SearchBox/GeoSearchbox';
import { makeStyles } from '@material-ui/core/styles';

const requestBizForm = {
  form: {
    name: 'Setup your profile',
    fieldgroups: ['Profile Info'],
    fields: [
      {
        name: 'description',
        label: 'Tell us about your business',
        group: 'Profile Info',
      },
      {
        name: 'fundinggoal',
        label: 'What is your fundraising goal?',
        group: 'Profile Info',
      },
      {
        name: 'profileimage',
        label: 'Profile Photo',
        group: 'Profile Info',
      },
      {
        name: 'heroimage',
        label: 'Header Photo',
        group: 'Profile Info',
      },
      {
        name: 'status',
        label: 'Current Status',
        group: 'Profile Info',
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
        label: 'Link to website',
        group: 'Profile Info',
      },
      {
        name: 'giftcard',
        label: 'Giftcard Link',
        group: 'Profile Info',
      },
      {
        name: 'donationlink',
        label: 'Donation Site Link',
        group: 'Profile Info',
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
});
const OnboardingStep2 = props => {
  const { forward, back } = props;
  const classes = useStyles();
  const validateAndCreate = info => {
    return info;
  };
  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid item md={12}>
        <Typography variant="subtitle1">Tell us about your business</Typography>
        <Typography variant="body1">All fields are optional.</Typography>
        <ComplexFormBuilder
          schema={requestBizForm.form}
          formAction={vals => {
            console.log('updated about you');
            forward();
          }}
        />
      </Grid>
    </Grid>
  );
};
export default OnboardingStep2;
