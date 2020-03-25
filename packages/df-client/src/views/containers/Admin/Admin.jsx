import React from 'react';
import gql from 'graphql-tag';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Drawer from '@material-ui/core/Drawer';
import AdminDrawer from './AdminDrawer';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import AdminProvider from './AdminProvider';
import NotificationCenter from './NotificationCenter';

import { mailFolderListItems, otherMailFolderListItems } from './AdminWrapper/NavItems';
import Workspace from './Workspace';
// import useStyles from './AdminStyle';
import SearchBox from '~components/SearchBox/GeoSearchbox';
import Header from './Header';

import { queries, mutations } from '~gql/index'; //todo - scope by owned businesses
const { businessesAllByOwner } = queries; //Think there is a quirk w/ babel @ index includes...

import { useIdentity } from '~utils/withIdentity';
import { useQuery, useMutation } from 'react-apollo';

// import SimpleDynamicForm from '~views/components/SimpleDynamicForm';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  panel: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: 'calc(100vh)',
    minHeight: 'auto',

    // [theme.breakpoints.down('sm')]: {
    //   height: 'auto',
    //   minHeight: 'calc(100vh - 64px)',
    //   paddingTop: '64px',
    // },
    // [theme.breakpoints.down('xs')]: {
    //   height: 'auto',
    //   minHeight: 'calc(100vh - 56px)',
    //   paddingTop: '56px',
    // },
    // [theme.breakpoints.up('sm')]: {
    //   height: 'calc(100vh - 64px)',
    // },
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    // bottom: theme.spacing(1) * 2,
    // right: theme.spacing(1) * 3,
  },
}));
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

const Admin = props => {
  // const { classes } = props;
  const classes = useStyles();
  const user = useIdentity();

  // const { loading, error, data } = useQuery(queries.businessesAllByOwner);

  const [addBizRequest, { data, loading, error }] = useMutation(CREATE_BIZ, {
    onCompleted: data => console.log(`completed - ${data}`),
    onError: error => console.log(`error - ${error}`),
  });

  const [opened, setOpened] = React.useState(true);
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);

  const handleNotificationToggle = () => setNotificationsOpen(!notificationsOpen);
  const handleDrawerToggle = () => setOpened(!opened);

  const [place, setPlace] = React.useState({});
  const [businessInfo, setBusinessInfo] = React.useState({});
  return (
    <AdminProvider>
      <Header
        logoAltText="DineForward"
        logo={'/Logo.svg'}
        toggleDrawer={handleDrawerToggle}
        toogleNotifications={handleNotificationToggle}
      />
      <div className={classNames(classes.panel, 'theme-dark')}>
        <AdminDrawer opened={opened} toggleDrawer={handleDrawerToggle} />
        <Workspace opened={opened}>
          <Typography variant="h1" className={classes.h1}>
            Header
          </Typography>
          <Typography variant="subtitle1" className={classes.h1}>
            SubHeader
          </Typography>
          <h1>Add a restaurant</h1>
          <p>{JSON.stringify(data)}</p>
          <h5>User</h5>
          <p>{JSON.stringify(user)}</p>
          <Grid container>
            <Grid item xs={8}>
              <SearchBox setPlace={setPlace} />
            </Grid>
          </Grid>
          <ComplexFormBuilder
            values={place}
            formAction={vals => {
              console.log('submitted', vals);
              setBusinessInfo(vals);
              addBizRequest({ variables: { data: vals } });
            }}
          />
        </Workspace>
        <NotificationCenter
          notificationsOpen={notificationsOpen}
          toogleNotifications={handleNotificationToggle}
        />
      </div>
    </AdminProvider>
  );
};
// export default withStyles(styles)(Admin);
export default Admin;
