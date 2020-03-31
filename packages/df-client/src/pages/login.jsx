/*eslint-disable*/
import React, { useState } from 'react';
import { useRouter } from 'next/router';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  List,
  ListItem,
  CardHeader,
  CardBody,
  Card,
  Button,
  TextField,
} from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
// core components

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from '~utils/apollo';
import { withIdentity } from '~utils/withIdentity';

import { PASSWORD_AUTH_MUTATION } from '~utils/api';

const useStyles = makeStyles(loginPageStyle);

const nextPage = '/account/manage';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [alertClosed, setAlertClosed] = useState(false);
  const router = useRouter();

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

  const displayError = (!alertClosed && router.query.error) || errorMessage;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const errorPage = router.pathname + '?error=${message}'; // Template string interpreted later;
  const authLink = authType =>
    `/auth/${authType}?operation=validate&onsuccess=${nextPage}&onfailure=${errorPage}`;

  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          //   backgroundImage: 'url(' + image + ')',
          backgroundColor: '#ccc',
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          {displayError ? (
            <Alert severity="error" onClose={closeAlert}>
              {displayError}
            </Alert>
          ) : null}
          <Grid container justify="center">
            <Grid item xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form} onSubmit={onSubmit}>
                  <CardHeader color="primary" signup className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>Login</h4>
                  </CardHeader>
                  <CardBody signup>
                    <TextField
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Email...',
                        type: 'email',
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        value: email,
                        onChange: e => setEmail(e.target.value),
                      }}
                    />
                    <TextField
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Password',
                        type: 'password',
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: 'off',
                        value: password,
                        onChange: e => setPassword(e.target.value),
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button type="submit" disabled={loading} simple color="primary" size="lg">
                      Login
                    </Button>
                  </div>
                  <div className={classes.textCenter}>
                    <Button color="google" href={authLink('google')}>
                      <i className="fab fa-google-plus-square" /> Sign in with Google
                    </Button>
                    {` `}
                    <Button color="facebook" href={authLink('facebook')}>
                      <i className="fab fa-facebook-square" /> Login with Facebook
                    </Button>
                    {` `}
                  </div>
                </form>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
