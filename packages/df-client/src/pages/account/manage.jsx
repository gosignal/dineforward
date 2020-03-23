import React, { Fragment } from 'react';
import { request } from 'graphql-request';

import { withStyles, Theme, Container, Grid, Slide, Typography, AppBar } from '@material-ui/core';

import { HomeIcon, InboxIcon } from '@material-ui/icons/Home';

import buildGraphQLProvider from 'ra-data-graphql-simple';
import { Admin, Resource } from 'react-admin';

import AccountPage from '~containers/AccountPageWrapper';
import NewLayout from '~components/NewLayout';

const API_URL = process.env.API_URL || 'http://localhost:8000/admin/api';

// import { withAuth } from '~utils/withAuth';

// import { PostCreate, PostEdit, PostList } from '~./posts';

const AccountManagePage = props => {
  // const [dataProvider, setDataProvider] = React.useState({ dataProvider });
  // const { name, blocks } = props;

  return (
    <NewLayout>
      <Container width="sm">
        <Grid container>
          <Grid item xs={12}>
            <Typography>Test</Typography>
          </Grid>
        </Grid>
      </Container>
    </NewLayout>
  );
};
// export default withAuth(AccountManagePage);
export default AccountManagePage;
