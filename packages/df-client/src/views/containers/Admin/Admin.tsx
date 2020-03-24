// import * as React from 'react';

// import * as PropTypes from 'prop-types';

// import { withStyles, Theme, Slide, Typography } from '@material-ui/core';

// // import { CookiesProvider } from 'react-cookie';

// import HomeIcon from '@material-ui/icons/Home';
// import InboxIcon from '@material-ui/icons/Inbox';

// import Navigation from './Nav';

// import WorkingArea from './WorkingArea';

// // app styles
// const styles = (theme: Theme) => ({});
// const navigation = <Navigation onNavigation={() => {}} />;
// const Admin = () => {
//   return (
//     <WorkingArea
//       appTitle={'DineForward'}
//       cookieBannerContent={
//         <Typography color="inherit" variant="body2" component="div">
//           <strong>This site uses cookies.</strong>
//         </Typography>
//       }
//       navigation={navigation}
//       onCloseCallbackChanged={() => {}}
//     />
//   );
// };

import { makeStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import { User } from 'User';
import UserUpdateMutation from '~gql/mutations/user/wrappers/UserUpdate';
import MeQuery from '~gql/queries/user/wrappers/MeQuery';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 960,
    [theme.breakpoints.up('md')]: {
      marginLeft: 240,
    },
  },

  h1: {
    margin: theme.spacing.unit * 2,
  },
}));

const Admin = props => {
  const { user } = props;

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item={true} className={classes.root}>
        <Typography variant="h1" className={classes.h1}>
          Header
        </Typography>
        <Typography lang={i18n.language} variant="subtitle1" className={classes.h1}>
          SubHeader
        </Typography>
        <Grid item>
          <MeQuery id={user.id} />
          <UserUpdateMutation user={user} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Admin;
