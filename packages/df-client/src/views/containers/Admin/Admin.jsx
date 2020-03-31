import React from 'react';

// import gql from 'graphql-tag';
// import classNames from 'classnames';

// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// // import Drawer from '@material-ui/core/Drawer';

// import { withStyles } from '@material-ui/core/styles';

import AdminProvider from './AdminProvider';
import NotificationCenter from '~components/Admin/NotificationCenter';

import { AdminHeader, AdminWorkspace, AdminDrawer } from '~components/Admin';

import { navRoutes } from '~components/Admin/AdminWrapper/NavItems';

// Comprised Places

import adminTheme from '~theme/admin';
import useStyles from './AdminStyle';

import { useIdentity } from '~utils/withIdentity';

import { ThemeProvider as AdminThemeProvider } from '@material-ui/core/styles';

const Admin = props => {
  const { children } = props;
  const classes = useStyles();
  const user = useIdentity();

  // const { loading, error, data } = useQuery(queries.businessesAllByOwner);

  const [opened, setOpened] = React.useState(true);
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);

  const handleNotificationToggle = () => setNotificationsOpen(!notificationsOpen);
  const handleDrawerToggle = () => setOpened(!opened);

  return (
    <AdminProvider>
      <AdminThemeProvider theme={adminTheme}>
        <AdminHeader
          logoAltText="DineForward"
          logo={'/DF-Logo-white.svg'}
          toggleDrawer={handleDrawerToggle}
          toogleNotifications={handleNotificationToggle}
        />
        <div className={classes.panel}>
          <AdminDrawer opened={opened} toggleDrawer={handleDrawerToggle} routes={navRoutes} />
          <AdminWorkspace opened={opened}>
            <div classes={classes} {...props}>
              {children}
            </div>
          </AdminWorkspace>
          <NotificationCenter
            notificationsOpen={notificationsOpen}
            toogleNotifications={handleNotificationToggle}
          />
        </div>
      </AdminThemeProvider>
    </AdminProvider>
  );
};

export default Admin;
