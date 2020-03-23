/*eslint-disable*/
import React, { useState } from 'react';
import Router from 'next/router'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
// core components
// import Header from '~theme/prebuilt/components/Header/Header.js';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import Card from '~theme/prebuilt/components/Card/Card.js';
import CardBody from '~theme/prebuilt/components/Card/CardBody.js';
import CardHeader from '~theme/prebuilt/components/Card/CardHeader.js';
import CustomInput from '~theme/prebuilt/components/CustomInput/CustomInput.js';

import loginPageStyle from '~theme/prebuilt/jss/material-kit-pro-react/views/loginPageStyle.js';

import { gql } from 'apollo-boost';
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from '~utils/apollo';
import { withIdentity } from '~utils/withIdentity';

import { PASSWORD_AUTH_MUTATION } from '~utils/api';

const useStyles = makeStyles(loginPageStyle);


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const [signIn, { error, loading, client }] = useMutation(gql(PASSWORD_AUTH_MUTATION), {
    variables: {
      email,
      password,
    },
    onCompleted: ({ error }) => {
      if (error) throw error;

      // Ensure there's no old unauthenticated data hanging around
      client.resetStore();

      Router.push('/account/manage');
    },
    onError: e => console.error("User login error:", e),
  });

  const onSubmit = e => {
    e.preventDefault();

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

  const displayError = error?.message || errorMessage;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
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
            <Alert severity="error">{displayError}</Alert>
          ) : null}
          <Grid container justify="center">
            <Grid item xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form} onSubmit={onSubmit}>
                  <CardHeader color="primary" signup className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>Login</h4>
                  </CardHeader>
                  <CardBody signup>
                    <CustomInput
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
                    <CustomInput
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
                    <Button
                      type="submit"
                      disabled={loading}
                      simple
                      color="primary"
                      size="lg"
                    >
                      Login
                    </Button>
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

export default withApollo({ ssr: true })(LoginPage);
