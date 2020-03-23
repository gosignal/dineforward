/*eslint-disable*/
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Icon from '@material-ui/core/Icon';
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
import { Field, Formik, FormikProps, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import { PassportSession } from '~gql/mutations';

import { loginSchema } from '~utils/validateSchemas';

import { useMutation } from '~gen/mutations';

import loginPageStyle from '../views/theme/prebuilt/jss/material-kit-pro-react/views/loginPageStyle.js';

interface ILoginFormValues {
  email: string;
  password: string;
}

const useStyles = makeStyles(loginPageStyle);

const doLogin = (fields, { resetForm }) => {
  console.log({ fields });
  // addCustomer({
  //   variables: {
  //     ...fields,
  //     FullName: `${fields.FirstName}  ${fields.SecondName}  ${fields.LastName}`,
  //   },
  // });
  resetForm();
};

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color="primary" signup className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>Login</h4>
                  </CardHeader>
                  <CardBody signup>
                    {/* <LoginComponent> */}
                    <>
                      <Formik
                        initialValues={{
                          email: '',
                          password: '',
                        }}
                        validationSchema={loginSchema}
                        onSubmit={doLogin}
                        render={({ errors, status, touched }) => (
                          <Form>
                            <Field
                              label="Email"
                              name="email"
                              type="email"
                              component={TextField}
                              margin="normal"
                              variant="outlined"
                              fullWidth
                            />
                            <Field
                              label="Password"
                              name="password"
                              type="password"
                              component={TextField}
                              margin="normal"
                              variant="outlined"
                              fullWidth
                            />
                            <Button type="submit" variant="outlined" color="primary">
                              Login
                            </Button>
                          </Form>
                        )}
                      />
                    </>
                    {/* </LoginComponent> */}
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button simple color="primary" size="lg">
                      Sign up
                    </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
