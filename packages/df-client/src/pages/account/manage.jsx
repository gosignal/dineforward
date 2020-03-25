import React, { Fragment } from 'react';
// import { request } from 'graphql-request';

import { withStyles, Theme, Container, Grid, Slide, Typography, AppBar } from '@material-ui/core';
import { withIdentity } from '~utils/withIdentity';

import NewLayout from '~components/NewLayout';

const API_URL = process.env.API_URL || 'http://localhost:8000/admin/api';

import { checkLoggedIn } from '~gql/checkLoggedIn';

import Admin from '~containers/Admin';

const AccountManagePage = props => {
  const { session } = props;

  console.log(props);

  return (
    <NewLayout>
      <Container width="sm">
        <Grid container>
          <Grid item xs={12}>
            <Admin />
          </Grid>
        </Grid>
      </Container>
    </NewLayout>
  );
};

// export const getStaticProps = async () => {
//   const {
//     data: { me },
//   } = await checkLoggedIn(apolloClient);

//   if (me === null) {
//     res.redirect('/');
//   }

//   const initialProps = await { loggedInUser: me };

//   return initialProps;
// };

export default withIdentity(AccountManagePage);
// export default AccountManagePage;
