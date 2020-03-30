/*eslint-disable*/
import React, { useState } from 'react';
import { useRouter } from 'next/router'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import Alert from '@material-ui/lab/Alert';

// @material-ui/icons
import LockIcon from '@material-ui/icons/Lock';
import Email from '@material-ui/icons/Email';
import Face from '@material-ui/icons/Face';
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import Check from '@material-ui/icons/Check';
// core components
// import Header from '~theme/prebuilt/components/Header/Header.js';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import Card from '~theme/prebuilt/components/Card/Card.js';
import CardBody from '~theme/prebuilt/components/Card/CardBody.js';
import InfoArea from '~theme/prebuilt/components/InfoArea/InfoArea.js';
import CustomInput from '~theme/prebuilt/components/CustomInput/CustomInput.js';

import { gql } from 'apollo-boost';
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from '~utils/apollo';
import { withIdentity } from '~utils/withIdentity';
import { CREATE_USER_AND_PASSWORD_AUTH_MUTATION } from '~utils/api';

import signupPageStyle from '~theme/prebuilt/jss/material-kit-pro-react/views/signupPageStyle.js';

const useStyles = makeStyles(signupPageStyle);

const nextPage = '/account/manage';

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

      router.push(nextPage);
    },
    onError: e => {
      setErrorMessage(e.message);
      console.error("User login error:", e);
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
          {displayError ? (
            <Alert severity="error" onClose={closeAlert}>{displayError}</Alert>
          ) : null}
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Register</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                      <InfoArea
                        className={classes.infoArea}
                        title="Info Here"
                        description="More info here!"
                        icon={Timeline}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="WOOooOOOooO"
                        description="Lets give them another reason to signup?"
                        icon={Code}
                        iconColor="primary"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Connect"
                        description="asdasdasd"
                        icon={Group}
                        iconColor="info"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                        <FormControlLabel
                          classes={{
                            label: classes.label,
                          }}
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={toggleTerms}
                              checkedIcon={<Check className={classes.checkedIcon} />}
                              icon={<Check className={classes.uncheckedIcon} />}
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
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start" className={classes.inputAdornment}>
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'Name...',
                            value: name,
                            onChange: e => setName(e.target.value),
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            type: 'email',
                            startAdornment: (
                              <InputAdornment position="start" className={classes.inputAdornment}>
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'Email...',
                            value: email,
                            onChange: e => setEmail(e.target.value),
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            type: 'password',
                            startAdornment: (
                              <InputAdornment position="start" className={classes.inputAdornment}>
                                <LockIcon className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'Password...',
                            value: password,
                            onChange: e => setPassword(e.target.value),
                          }}
                        />

                        <div className={classes.textCenter}>
                          <Button
                            type="submit"
                            disabled={loading || !termsAccepted}
                            round
                            color="primary"
                          >
                            Get started
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
