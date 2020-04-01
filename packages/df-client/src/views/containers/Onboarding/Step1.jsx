import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import GeoSearchBox from '~components/SearchBox/GeoSearchbox';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';

const requestBizForm = {
  form: {
    name: 'Request to add a business',
    fieldgroups: ['Business Info'],
    fields: [
      {
        name: 'businessname',
        label: 'Business Name',
        group: 'Business Info',
      },
      {
        name: 'address1',
        label: 'Address 1',
        group: 'Business Info',
      },
      {
        name: 'adddress2',
        label: 'Address 2',
        group: 'Business Info',
      },
      {
        name: 'city',
        label: 'City',
        group: 'Business Info',
      },
      {
        name: 'state',
        label: 'State',
        group: 'Business Info',
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
// const BusinessContext = React.createContext(bizVals);
const OnboardingStep1 = ({ cnfig, onNext }) => {
  const classes = useStyles();
  const [place, setPlace] = React.useState({});

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
    console.log({ matched });
    setPlaceInputVals(matched);
  };

  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid item md={12}>
        <GeoSearchBox fullWidth setPlace={handleSetPlace} />
      </Grid>
      <Grid item md={12}>
        <Typography variant="subtitle1">or add it manually...</Typography>
        <ComplexFormBuilder
          incomingValues={placeInputVals}
          schema={requestBizForm.form}
          formAction={vals => {
            console.log('submitted', vals, next);
            onNext(vals);
          }}
        />
      </Grid>
    </Grid>
  );
};
export default OnboardingStep1;
