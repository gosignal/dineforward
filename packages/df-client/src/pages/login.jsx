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
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

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

  // TODO: This mutation needs to move to a server-side only API
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
      let msg = e.message || e.toString();
      if (/passwordAuth:/.test(msg)) {
        msg = 'Error: User email not found or password incorrect';
      } else {
        console.error('User login error:', e);
      }
      setErrorMessage(msg);
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const displayError = (!alertClosed && router.query.error) || errorMessage;

  const errorPage = router.pathname + '?error=${message}'; // Template string interpreted later;
  const authLink = authType =>
    `/auth/${authType}?operation=validate&onsuccess=${nextPage}&onfailure=${errorPage}`;

  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {displayError ? (
            <Alert severity="error" onClose={closeAlert}>{displayError}</Alert>
          ) : null}
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
          <form className={classes.form} noValidate onSubmit={onSubmit}>
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
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
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
                <Link href="/business/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
