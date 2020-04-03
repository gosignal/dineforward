/*eslint-disable*/
import React, { useState } from 'react';
import { useRouter } from 'next/router';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';

import Alert from '@material-ui/lab/Alert';

// @material-ui/icons
import LockIcon from '@material-ui/icons/Lock';
import Email from '@material-ui/icons/Email';
import Face from '@material-ui/icons/Face';
import Check from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { CREATE_USER_AND_PASSWORD_AUTH_MUTATION } from '~utils/api';

const nextPage = '/business/onboarding';

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

const SignupPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [alertClosed, setAlertClosed] = useState(false);
  const router = useRouter();

  const [signIn, { loading, client }] = useMutation(gql(CREATE_USER_AND_PASSWORD_AUTH_MUTATION), {
    variables: {
      user: {
        email,
        name,
        password,
        username: email,
        isBusiness: true,
      },
      email,
      password,
    },
    onCompleted: ({ error }) => {
      if (error) throw error;

      // Ensure there's no old unauthenticated data hanging around
      client.resetStore();

      // Don't use the Next.js client-side router here. We must load the
      // next page from the server to trigger the server-side user setup
      // in withIdentity.
      if (typeof window !== 'undefined') window.location.href = nextPage;
      else router.push(nextPage);
    },
    onError: e => {
      let msg = e.message || 'Unknown error';
      if (/duplicate key error/.test(msg)) {
        msg = 'That email address has already been signed up';
      }
      setErrorMessage(msg);
      console.error('User signup error:', e);
    },
  });

  const onSubmit = e => {
    e.preventDefault();
    closeAlert();

    if (!name) {
      setErrorMessage(`Please provide a Name`);
      return;
    }
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

  const displayError = (!alertClosed && router.query.error) || errorMessage;
  const toggleTerms = () => setTermsAccepted(!termsAccepted);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const errorPage = router.pathname + '?error=${message}'; // Template string interpreted later;
  const authLink = authType =>
    `/auth/${authType}?operation=create&isbusiness=true&onsuccess=${nextPage}&onfailure=${errorPage}`;

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={
          {
            // backgroundImage: 'url(' + image + ')',
            // backgroundSize: 'cover',
            // backgroundPosition: 'top center',
          }
        }
      >
        <div className={classes.container}>
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                {displayError ? (
                  <Alert severity="error" onClose={closeAlert}>
                    {displayError}
                  </Alert>
                ) : null}
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign Up
                </Typography>
                <FormControlLabel
                  classes={{
                    label: classes.label,
                  }}
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={toggleTerms}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<CheckBoxOutlineBlankIcon className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                      checked={termsAccepted}
                    />
                  }
                  label={
                    <span>
                      I agree to the <a href="/terms">terms and conditions</a>.
                    </span>
                  }
                />
                <div className={classes.textCenter}>
                  <Button color="google" href={authLink('google')} disabled={!termsAccepted}>
                    <i className="fab fa-google-plus-square" /> Sign in with Google
                  </Button>
                  {` `}
                  <Button color="facebook" href={authLink('facebook')} disabled={!termsAccepted}>
                    <i className="fab fa-facebook-square" /> Login with Facebook
                  </Button>
                  {` `}
                  <h4 className={classes.socialTitle}>or with email</h4>
                </div>
                <form className={classes.form} onSubmit={onSubmit}>
                  <TextField
                    className={classes.customFormControlClasses}
                    fullWidth
                    placeholder="Name..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <TextField
                    className={classes.customFormControlClasses}
                    fullWidth
                    autoComplete="email"
                    type="email"
                    placeholder="Email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <TextField
                    className={classes.customFormControlClasses}
                    fullWidth
                    autoComplete="new-password"
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />

                  <div className={classes.textCenter}>
                    <Button
                      type="submit"
                      disabled={loading || !termsAccepted}
                      color="primary"
                    >
                      Get started
                    </Button>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
