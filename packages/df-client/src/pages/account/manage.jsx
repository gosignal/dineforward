import React, { Fragment } from 'react';
import { request } from 'graphql-request';

import { withStyles, Theme, Slide, Typography } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import AppBar from '@material-ui/core/AppBar';

// import Navigation, { NavigationProvider, INavigationItem } from './Navigation';

import AccountPage from '~containers/AccountPageWrapper';
// import Account from '~containers/AccountPageWrapper/Account';
import NewLayout from '~components/NewLayout';

const API_URL = process.env.API_URL || 'http://localhost:8000/admin/api';

const AccountManagePage = props => {
  const { name, blocks } = props;

  return (
    <NewLayout>
      <AccountPage title="" subtitle="">
        <AppBar />
        <Typography variant="body1">Manaage</Typography>
      </AccountPage>
    </NewLayout>
  );
};
export default AccountManagePage;
