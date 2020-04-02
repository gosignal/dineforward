import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import GeoSearchBox from '~components/SearchBox/GeoSearchbox';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import gql from 'graphql-tag';
import { getErrorMsg } from './utils';

const restaurantGroup = 'Tell us about your restaurant';
const contactGroup = 'How should we get in touch with you?';

const requestBizForm = {
  form: {
    name: 'Request to add a business',
    fieldgroups: [
      restaurantGroup,
      contactGroup,
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
        name: 'adddress2',
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
        name: 'phonenumber',
        label: 'Your phone number - not shared publicly',
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
  const { forward, back } = props;
  const classes = useStyles();
  const [place, setPlace] = useState({});

  //
  // kind of hacky, but need to clean up the return values from google to map nicely to our form
  //
  const [placeInputVals, setPlaceInputVals] = React.useState({});

  const handleSetPlace = incomingplace => {
    console.log(incomingplace, 'incoming place');
    const matched = {
      businessname: incomingplace.structured_formatting.main_text,
      address1: `${incomingplace.street_number} ${incomingplace.route}`,
      city: incomingplace.locality,
      state: incomingplace.administrative_area_level_1,
    };
    console.log({
      matched,
    });
    setPlaceInputVals(matched);
  };

 
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
        <GeoSearchBox fullWidth setPlace={handleSetPlace} />
      </Grid>
      <Grid item md={12}>
        <Typography variant="subtitle1">or add it manually...</Typography>
        <ComplexFormBuilder
          incomingValues={placeInputVals}
          schema={requestBizForm.form}
          formAction={onSubmit}
        />
      </Grid>
    </Grid>
  );
};
export default OnboardingStep1;
