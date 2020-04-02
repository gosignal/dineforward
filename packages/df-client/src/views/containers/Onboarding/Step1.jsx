import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
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
const contactGroup = 'Your contact phone';
const contactDescription =
  `If you have another number that is best to contact you for DineForward related
  communication, please enter it here.`;

const requestBizForm = {
  form: {
    name: 'Request to add a business',
    fieldgroups: [
      { name: restaurantGroup, description: stepDescription },
      { name: contactGroup, description: contactDescription },
    ],
    fields: [
      {
        name: 'name',
        label: 'Restaurant name',
        group: restaurantGroup,
        required: true,
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
        required: true,
      },
      {
        name: 'state',
        label: 'State',
        group: restaurantGroup,
        required: true,
      },
      {
        name: 'zip',
        label: 'Zip Code',
        group: restaurantGroup,
        required: true,
      },
      {
        name: 'mainEmail',
        label: 'Restaurant email (for customer questions)',
        group: restaurantGroup,
      },
      {
        name: 'mainPhone',
        label: 'Restaurant phone (to place takeout orders, etc.)',
        group: restaurantGroup,
      },
      {
        name: 'contactPhone',
        label: 'Your contact phone (not shared publicly)',
        group: contactGroup,
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

  const onSubmit = (formData, { setSubmitting }) => {
    const { contactPhone, ...data } = formData;
    // TODO: Add contactPhone to User in mutation
    if (!loading) {
      createBiz({ variables: { data } })
        // Restore submit button
        .then(() => setSubmitting(false));
    }
  };

  const errorMsg = getErrorMsg(error);

  return (
    <Grid container spacing={5} className={classes.container} direction="column" alignItems="center">
      {errorMsg && (
        <Grid item md={12}>
          <Alert severity="error">{errorMsg}</Alert>
        </Grid>
      )}
      <Grid item md={12}>
        <Typography variant="subtitle1">{stepTitle}</Typography>
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
export default OnboardingStep1;
