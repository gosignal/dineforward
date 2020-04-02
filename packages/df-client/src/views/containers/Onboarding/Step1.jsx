import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import gql from 'graphql-tag';
import { getErrorMsg } from './utils';

const stepTitle = `Please tell us more about your restaurant`;
const stepDescription =
  `This is the information that will be shown to the public on your restaurant's profile page.`;

const restaurantGroup = '';
const requestBizForm = {
  form: {
    name: 'Request to add a business',
    fieldgroups: [
      restaurantGroup,
    ],
    fields: [
      {
        name: 'name',
        label: 'Restaurant name',
        group: restaurantGroup,
      },
      {
        name: 'address1',
        label: 'Address 1',
        group: restaurantGroup,
      },
      {
        name: 'address2',
        label: 'Address 2',
        group: restaurantGroup,
      },
      {
        name: 'city',
        label: 'City',
        group: restaurantGroup,
      },
      {
        name: 'state',
        label: 'State',
        group: restaurantGroup,
      },
      {
        name: 'zip',
        label: 'Zip Code',
        group: restaurantGroup,
      },
      {
        name: 'mainEmail',
        label: 'Business email',
        group: restaurantGroup,
      },
      {
        name: 'mainPhone',
        label: 'Business phone',
        group: restaurantGroup,
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

const bizVals = {
  name: null,
  form: null,
  place: null,
};

// TODO -- clean these gql queries up
const CREATE_BIZ = gql`
  mutation createBiz($data: BusinessCreateInput!) {
    createBusiness(data: $data) {
      name
      description
    }
  }
`;

const OnboardingStep1 = props => {
  const { forward } = props;
  const classes = useStyles();

  const [createBiz, { loading, error }] = useMutation(CREATE_BIZ, {
    onCompleted: data => {
      console.log(`createbiz completed - ${data}`);
      forward();
    },
    // Must provide onError to avoid unhandled Promise rejection
    onError: err => {},
  });

  const onSubmit = (data, { setSubmitting }) => {
    if (!loading) {
      createBiz({ variables: { data } })
        // Restore submit button
        .then(() => setSubmitting(false));
    }
  };

  const errorMsg = getErrorMsg(error);

  return (
    <Grid container spacing={5} className={classes.container}>
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
        />
      </Grid>
    </Grid>
  );
};
export default OnboardingStep1;
