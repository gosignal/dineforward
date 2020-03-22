import React from 'react';
import classNames from 'classnames';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Card from '~theme/prebuilt/components/Card/Card.js';
import CardBody from '~theme/prebuilt/components/Card/CardBody.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import Typography from '@material-ui/core/Typography';

import gql from 'graphql-tag';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';

import { makeStyles } from '@material-ui/core/styles';
import profilePageStyle from '../../theme/prebuilt/jss/material-kit-pro-react/views/profilePageStyle.js';

const ADD_BIZ_REQUEST = gql`
  mutation CreateCustomer(
    $yourName: String
    $yourTitle: String
    $yourPhone: String
    $yourEmail: String
    $businessName: String
    $typeOfBusiness: String
    $city: String
    $neighborhood: String
    $status: String
    $website: String
    $facebook: String
    $twitter: String
    $instagram: String
  ) {
    CreateCustomer(
      yourName: $yourName
      yourTitle: $yourTitle
      yourPhone: $yourPhone
      yourEmail: $yourEmail
      businessName: $businessName
      typeOfBusiness: $typeOfBusiness
      city: $city
      neighborhood: $neighborhood
      status: $status
      website: $website
      facebook: $facebook
      twitter: $twitter
      instagram: $instagram
    )
  }
`;

// stubbed test
const GET_BIZ_REQUEST = gql`
  query GetBusinessRequest {
    appVersion
  }
`;

// const useStyles = makeStyles(profilePageStyle);

const RequestForm = () => {
  // const classes = useStyles();
  const [addBizRequest, { data }] = useMutation(ADD_BIZ_REQUEST, {
    refetchQueries: [{ query: GET_BIZ_REQUEST }],
  });
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={7}>
        <GridContainer>
          <div id="customerForm">
            <Typography>Requst to be listed</Typography>
            <Formik
              initialValues={{
                yourName: '',
                yourTitle: '',
                yourEmail: '',
                yourPhone: '',
                businessName: '',
                typeOfBusiness: '',
                city: '',
                neighborhood: '',
                status: '',
                website: '',
                facebook: '',
                twitter: '',
                instagram: '',
              }}
              validationSchema={Yup.object().shape({
                yourName: Yup.string().required('First Name is required'),
                yourTitle: Yup.string().required('Second Name is required'),
                yourEmail: Yup.string()
                  .email('Email is invalidd')
                  .required('Email is required'),
                businessName: Yup.string().required('Business name is required'),
                yourPhone: Yup.string().required('Phone is required'),
                typeOfBusiness: Yup.string().required('is required'),
                city: Yup.string().required('is required'),
                neighborhood: Yup.string().required('is required'),
                status: Yup.string().required('is required'),
                website: Yup.string().required('is required'),
                facebook: Yup.string().required('is required'),
                twitter: Yup.string().required('is required'),
                instgram: Yup.string().required('is required'),
              })}
              onSubmit={(fields, { resetForm }) => {
                // TODO: ask team workflow for request -- do we create biz, or create request to create biz?
                //
                // addBizRequest({
                //   variables: {
                //     ...fields,
                //   },
                // });
                console.log({ fields });
                resetForm();
              }}
              render={({ errors, status, touched }) => (
                <Form>
                  <Field
                    label="Business Name"
                    name="businessName"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Name"
                    name="YourName"
                    type="text"
                    component={TextField}
                    margin="none"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Title"
                    name="yourTitle"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Email"
                    name="YourEmail"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Phone"
                    name="yourPhone"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="City"
                    name="city"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Phone"
                    name="neighborhood"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Phone"
                    name="status"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Phone"
                    name="website"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Phone"
                    name="facebook"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Phone"
                    name="twitter"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Field
                    label="Your Phone"
                    name="instagram"
                    type="text"
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                  <Button type="submit" variant="outlined" color="primary">
                    Register
                  </Button>{' '}
                  <Button type="reset" variant="outlined" color="secondary">
                    Reset
                  </Button>
                </Form>
              )}
            />
          </div>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
};

export default RequestForm;
