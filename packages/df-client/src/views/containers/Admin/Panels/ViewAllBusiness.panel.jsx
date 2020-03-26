import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import ComplexFormBuilder from '../../../components/ComplexFormBuilder';
import GeoSearchBox from '../../../components/SearchBox/GeoSearchbox';
import StatCardBar from '../../../components/StatCardBar';
import useStyles from '../AdminStyle';
import AddRestaurantFormSchema from './adminForms';

import { useQuery, useMutation } from 'react-apollo';
/**
 *
 * DEMO
 *
 *
 */
// const CREATE_BIZ = gql`
//   mutation createBiz($data: BusinessCreateInput!) {
//     createBusiness(data: $data) {
//       name
//       description
//     }
//   }
// `;

const VIEW_ALL_BUINESSES = gql`
  query businessesAllByOwner {
    allBusinesses {
      businessSlug
      name
      description
      location {
        googlePlaceID
      }
      owner {
        name
      }
    }
  }
`;
const gqlEvents = {
  onCompleted: data => console.log(`completed - ${data}`),
  onError: error => console.log(`error - ${error}`),
};

// import { queries, mutations } from '~gql/index'; //todo - scope by owned businesses
import classNames from 'classnames';
import { IncomingMessage } from 'http';
// const { businessesAllByOwner } = queries; //Think there is a quirk w/ babel @ index includes...

const AddRestaurantPanel = props => {
  const classes = useStyles();

  // const [addBizRequest, { data, loading, error }] = useMutation(CREATE_BIZ, {
  //   onCompleted: data => console.log(`completed - ${data}`),
  //   onError: error => console.log(`error - ${error}`),
  // });

  const { loading, error, data } = useQuery(VIEW_ALL_BUINESSES, gqlEvents);

  const [place, setPlace] = React.useState({});
  const [businessInfo, setBusinessInfo] = React.useState({});
  if (loading) return <b>Loading...</b>;
  if (error) return <b>Error - {error}</b>;
  if (!error && !loading && data) {
    return (
      <Box className={classes.panel}>
        <div className={classes.panelContent}>
          <Grid container spacing={5}>
            <Grid item md={12}>
              <Typography variant="h3">All businesses</Typography>
              <Link href="businesses/new">
                <a>
                  <button>Add a new business</button>
                </a>
              </Link>
            </Grid>
            <Grid item md={12}>
              <ul>
                {data.allBusinesses.map(business => {
                  return <li>{business.name}</li>;
                })}
              </ul>
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  }
};

export default AddRestaurantPanel;
