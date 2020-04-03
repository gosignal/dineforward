import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import Alert from '@material-ui/lab/Alert';
import gql from 'graphql-tag';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import { getErrorMsg, removeEmpty } from './utils';

const stepTitle = `Please tell us more about how your customers can connect with you`;
const stepDescription = '';

const group1 = '';
const requestBizForm = {
  form: {
    name: 'Setup your profile',
    fieldgroups: [group1],
    fields: [
      {
        name: 'description',
        description: 'Tell us about your restaurant',
        group: group1,
        multiline: true,
        rows: 5,
        placeholder:
          `Example: Nick's on Grand is a vegan Filipino restaurant located in ` +
          `San Bruno, CA. We are raising money to support our staff and keep ` +
          `our restaurants open.`,
      },
      {
        name: 'status',
        description: 'Are you currently:',
        group: group1,
        type: 'select',
        options: [
          {
            label: 'Open',
            value: 'open',
          },
          {
            label: 'Takeout/Delivery Only',
            value: 'takeoutDelivery',
          },
          {
            label: 'Temporarily Closed',
            value: 'closedTemp',
          },
        ],
      },
      {
        name: 'website',
        description: 'Website',
        group: group1,
        placeholder: 'Example: www.nicksongrand.com',
      },
      {
        name: 'instagram',
        description: 'Instagram',
        group: group1,
        placeholder: 'Example: @nicksongrand',
      },
      {
        name: 'giftcardLink',
        description: 'Do you have a place where customers can purchase gift cards?',
        group: group1,
        placeholder: 'Example: www.nicksongrand.com/giftcards',
      },
      {
        name: 'donationLink',
        description: 'Do you have an existing site set up to accept donations?',
        group: group1,
        placeholder: 'Example: www.gofundme.com/...',
      },
    ],
  },
};

const UPDATE_BIZ = gql`
  mutation updateBiz($id: ID!, $data: BusinessUpdateInput!) {
    updateBusiness(id: $id, data: $data) {
      id
    }
  }
`;

const OnboardingStep2 = ({ back, businessId, classes = {}, forward }) => {

  if (!businessId) throw new Error(`Did not get newly created business ID`);

  const [updateBiz, { loading, error }] = useMutation(UPDATE_BIZ, {
    onCompleted: data => {
      console.log(`Update completed`, data);
      forward();
    },
    // Must provide onError to avoid unhandled Promise rejection
    onError: err => {},
  });

  const onSubmit = (formData, { setSubmitting }) => {
    const data = removeEmpty(formData);
    if (!loading) {
      updateBiz({ variables: { id: businessId, data } })
        // Restore submit button
        .then(() => setSubmitting(false));
    }
  };

  const errorMsg = getErrorMsg(error);

  return (
    <Grid
      container
      spacing={5}
      className={classes.root}
      direction="column"
      alignItems="center"
    >
      {errorMsg && (
        <Grid item md={12}>
          <Alert severity="error">{errorMsg}</Alert>
        </Grid>
      )}
      <Grid item md={8} xs={12}>
        <Typography variant="subtitle1" className={classes.stepTitle}>{stepTitle}</Typography>
        <Typography variant="body1">{stepDescription}</Typography>
        <ComplexFormBuilder schema={requestBizForm.form} formAction={onSubmit}>
          {({ isSubmitting }) => (
            <Box display="flex" justifyContent="flex-end" className={classes.buttonBox}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                endIcon={<DoubleArrow />}
              >
                Next
              </Button>
            </Box>
          )}
        </ComplexFormBuilder>
      </Grid>
    </Grid>
  );
};
export default OnboardingStep2;
