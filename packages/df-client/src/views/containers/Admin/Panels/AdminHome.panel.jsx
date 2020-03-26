import React from 'react';

import gql from 'graphql-tag';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import GeoSearchBox from '~components/SearchBox/GeoSearchbox';
import StatCardBar from '../../../components/StatCardBar';
import useStyles from '../AdminStyle';

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
// const { businessesAllByOwner } = queries; //Think there is a quirk w/ babel @ index includes...

const AdminHomePanel = props => {
  const classes = useStyles();

  const [addBizRequest, { data, loading, error }] = useMutation(CREATE_BIZ, {
    onCompleted: data => console.log(`completed - ${data}`),
    onError: error => console.log(`error - ${error}`),
  });

  const [place, setPlace] = React.useState({});
  const [businessInfo, setBusinessInfo] = React.useState({});

  return (
    <Box className={classes.panel}>
      <div className={classes.panelContent}>
        <Grid container>
          <Grid item md={12}>
            <Typography variant="h3">Dashboard</Typography>
          </Grid>
          <Grid item md={12}>
            <StatCardBar />
          </Grid>
          <Grid item md={12} />
        </Grid>
      </div>
    </Box>
  );
};

export default AdminHomePanel;
