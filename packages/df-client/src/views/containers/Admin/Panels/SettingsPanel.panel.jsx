import React from 'react';

import gql from 'graphql-tag';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import ComplexFormBuilder from '../../../components/ComplexFormBuilder';
import GeoSearchBox from '../../../components/SearchBox/GeoSearchbox';
import StatCardBar from '../../../components/StatCardBar';
import useStyles from '../AdminStyle';
import Settings from './settingsForm';

import { useQuery, useMutation } from 'react-apollo';
/**
 *
 * DEMO
 *
 *
 */
const CREATE_BIZ = gql`
  mutation createBiz($data: BusinessCreateInput!) {
    createBusiness(data: $data) {
      name
      description
    }
  }
`;

// import { queries, mutations } from '~gql/index'; //todo - scope by owned businesses
import classNames from 'classnames';
import { IncomingMessage } from 'http';
// const { businessesAllByOwner } = queries; //Think there is a quirk w/ babel @ index includes...

const AddRestaurantPanel = props => {
  const classes = useStyles();

  const [addBizRequest, { data, loading, error }] = useMutation(CREATE_BIZ, {
    onCompleted: data => console.log(`completed - ${data}`),
    onError: error => console.log(`error - ${error}`),
  });

  const [place, setPlace] = React.useState({});
  const [businessInfo, setBusinessInfo] = React.useState({});

  const handleSetPlace = placeProps => {
    console.log({ placeProps });

    setPlace(placeProps);

    // todo map geocoded result values -> complex form values so to render values to input
  };

  return (
    <Box className={classes.panel}>
      <div className={classes.panelContent}>
        <Grid container spacing={5}>
          <Grid item md={12}>
            <Typography variant="h3">Manage your settings</Typography>
          </Grid>
          <Grid item md={12}>
            <ComplexFormBuilder
              IncomingValues={place}
              schema={Settings}
              formAction={vals => {
                // setBusinessInfo(vals);
                // addBizRequest({ variables: { data: vals } });
              }}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default AddRestaurantPanel;
