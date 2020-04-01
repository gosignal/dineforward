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
        name: 'name',
        label: 'Tell us about your business',
        group: 'Profile Info',
      },
      {
        name: 'email',
        label: 'What is your fundraising goal?',
        group: 'Profile Info',
      },
      {
        name: 'description',
        label: 'Profile Photo',
        group: 'Profile Info',
      },
      {
        name: 'businessname',
        label: 'Header Photo',
        group: 'Profile Info',
      },
      {
        name: 'address1',
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
    marginTop: '200px',
  },
});
const OnboardingStep2 = ({ cnfig, next }) => {
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
          IncomingValues={{}}
          schema={requestBizForm.form}
          formAction={vals => {
            console.log('updated about you');
            next();
          }}
        />
      </Grid>
    </Grid>
  );
};
export default OnboardingStep2;
