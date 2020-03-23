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
import { Field, Formik, FormikProps } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';

import { PassportSession } from '~gql/mutations';

import { loginSchema } from '~utils/validateSchemas';

import { PassportSessionCreateInput } from '~gen/graphql';

import loginPageStyle from '../views/theme/prebuilt/jss/material-kit-pro-react/views/loginPageStyle.js';

interface ILoginFormValues {
  email: string;
  password: string;
}

const useStyles = makeStyles(loginPageStyle);

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundColor: '#fff',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color="primary" signup className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>Login</h4>
                  </CardHeader>
                  <CardBody signup>
                    <LoginComponent>
                      {(login, { loading }) => (
                        <Formik
                          initialValues={{
                            email: '',
                            password: '',
                          }}
                          validationSchema={loginSchema}
                          onSubmit={async (values: ILoginFormValues, { setErrors }) => {
                            const response = await login({
                              variables: values,
                              update: (cache, { data }) => {
                                if (!data || !data.login) {
                                  return;
                                }

                                cache.writeQuery<MeQuery>({
                                  query: meQuery,
                                  data: {
                                    me: data.login,
                                  },
                                });
                              },
                            });

                            if (response && response.data && !response.data.login) {
                              setErrors({
                                email: 'Invalid login',
                              });

                              return;
                            }

                            Router.push('/');
                          }}
                        >
                          {({ handleSubmit }: FormikProps<ILoginFormValues>) => (
                            <form onSubmit={handleSubmit}>
                              <Field name="email" placeholder="Email" component={InputField} />

                              <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                component={InputField}
                              />

                              <Flex justifyContent="flex-end">
                                <Button type="submit" loading={loading}>
                                  Submit
                                </Button>
                              </Flex>
                            </form>
                          )}
                        </Formik>
                      )}
                    </LoginComponent>
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button simple color="primary" size="lg">
                      Login
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
