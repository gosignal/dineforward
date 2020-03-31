/*eslint-disable*/
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import { PASSWORD_AUTH_MUTATION } from '~utils/api';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const nextPage = '/account/manage';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/dissapearing-restaurant-dark.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFCA24',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [alertClosed, setAlertClosed] = useState(false);

  const [signIn, { loading, client }] = useMutation(gql(PASSWORD_AUTH_MUTATION), {
    variables: {
      email,
      password,
    },
    onCompleted: ({ error }) => {
      if (error) throw error;

      // Ensure there's no old unauthenticated data hanging around
      client.resetStore();

      router.push(nextPage);
    },
    onError: e => {
      setErrorMessage(e.message);
      console.error('User login error:', e);
    },
  });

  const onSubmit = e => {
    e.preventDefault();
    closeAlert();

    if (!email) {
      setErrorMessage(`Please provide an email address`);
      return;
    }
    if (!password) {
      setErrorMessage(`Please provide a password`);
      return;
    }

    if (!loading) signIn();
  };

  const closeAlert = () => {
    setAlertClosed(true);
    setErrorMessage(null);
  };
  // if (router.query) {
  //   const displayError = (!alertClosed && router.query.error) || errorMessage;
  // }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  // const errorPage = router.pathname + '?error=${message}'; // Template string interpreted later;
  const errorPage = '';
  const authLink = authType =>
    `/auth/${authType}?operation=validate&onsuccess=${nextPage}&onfailure=${errorPage || ''}`;

  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div>
            <div className={classes.textCenter}>
              {' '}
              <Button variant="contained" color="google" href={authLink('google')}>
                <i className="fab fa-google-plus-square" /> Sign in with Google
              </Button>
              <br />
              <br />
              <Button variant="contained" color="facebook" href={authLink('facebook')}>
                <i className="fab fa-facebook-square" /> Login with Facebook
              </Button>
              {` `}
            </div>
          </div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
  // return (
  //   <div>
  //     <div
  //       className={classes.pageHeader}
  //       style={{
  //         //   backgroundImage: 'url(' + image + ')',
  //         backgroundColor: '#ccc',
  //         //   backgroundSize: 'cover',
  //         //   backgroundPosition: 'top center',
  //       }}
  //     >
  //       <div className={classes.container}>
  //         {displayError ? (
  //           <Alert severity="error" onClose={closeAlert}>
  //             {displayError}
  //           </Alert>
  //         ) : null}
  //         <Grid container justify="center">
  //           <Grid item xs={12} sm={12} md={4}>
  //             <Card>
  //               <form className={classes.form} onSubmit={onSubmit}>
  //                 <CardHeader color="primary" signup className={classes.cardHeader}>
  //                   <h4 className={classes.cardTitle}>Login</h4>
  //                 </CardHeader>
  //                 <CardBody signup>
  //                   <TextField
  //                     id="email"
  //                     fullWidth
  //                     inputProps={{
  //                       placeholder: 'Email...',
  //                       type: 'email',
  //                       startAdornment: (
  //                         <InputAdornment position="start">
  //                           <Email className={classes.inputIconsColor} />
  //                         </InputAdornment>
  //                       ),
  //                       value: email,
  //                       onChange: e => setEmail(e.target.value),
  //                     }}
  //                   />
  //                   <TextField
  //                     id="pass"
  //                     fullWidth
  //                     inputProps={{
  //                       placeholder: 'Password',
  //                       type: 'password',
  //                       startAdornment: (
  //                         <InputAdornment position="start">
  //                           <LockIcon className={classes.inputIconsColor} />
  //                         </InputAdornment>
  //                       ),
  //                       autoComplete: 'off',
  //                       value: password,
  //                       onChange: e => setPassword(e.target.value),
  //                     }}
  //                   />
  //                 </CardBody>
  //                 <div className={classes.textCenter}>
  //                   <Button type="submit" disabled={loading} simple color="primary" size="lg">
  //                     Login
  //                   </Button>
  //                 </div>
  //                 <div className={classes.textCenter}>
  //                   <Button color="google" href={authLink('google')}>
  //                     <i className="fab fa-google-plus-square" /> Sign in with Google
  //                   </Button>
  //                   {` `}
  //                   <Button color="facebook" href={authLink('facebook')}>
  //                     <i className="fab fa-facebook-square" /> Login with Facebook
  //                   </Button>
  //                   {` `}
  //                 </div>
  //               </form>
  //             </Card>
  //           </Grid>
  //         </Grid>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default LoginPage;
