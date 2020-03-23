import React, { Fragment } from 'react';
import { request } from 'graphql-request';

import { withStyles, Theme, Slide, Typography } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import AppBar from '@material-ui/core/AppBar';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import { Admin, Resource } from 'react-admin';
// import Navigation, { NavigationProvider, INavigationItem } from './Navigation';

import AccountPage from '~containers/AccountPageWrapper';
// import Account from '~containers/AccountPageWrapper/Account';
import NewLayout from '~components/NewLayout';

const API_URL = process.env.API_URL || 'http://localhost:8000/admin/api';

// import { PostCreate, PostEdit, PostList } from '~./posts';

const AccountManagePage = props => {
  const [dataProvider, setDataProvider] = React.useState({ dataProvider });
  // const { name, blocks } = props;

  return (
    <NewLayout>
      <AccountPage title="" subtitle="" />
    </NewLayout>
  );
};
export default AccountManagePage;
