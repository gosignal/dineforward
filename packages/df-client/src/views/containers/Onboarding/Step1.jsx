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
import { useIdentity } from '~utils/withIdentity';
import { getErrorMsg, removeEmpty } from './utils';

const stepTitle = `Please tell us more about your restaurant`;
const stepDescription =
  `This is the information that will be shown to the public on your restaurant's
  profile page.`;

const restaurantGroup = '';
const contactGroup = 'Your contact phone';
const contactDescription =
  `If you have another number that is best to contact you for DineForward related
  communication, please enter it here.`;

const requestBizForm = {
  form: {
    name: 'Request to add a business',
    fieldgroups: [
      { name: restaurantGroup, description: stepDescription },
      { name: contactGroup },
    ],
    fields: [
      {
        name: 'name',
        description: 'Restaurant name *',
        group: restaurantGroup,
        required: true,
      },
      {
        name: 'address1',
        description: 'Address line 1 *',
        group: restaurantGroup,
        required: true,
      },
      {
        name: 'address2',
        description: 'Address line 2',
        group: restaurantGroup,
      },
      {
        name: 'city',
        description: 'City *',
        group: restaurantGroup,
        required: true,
      },
      {
        name: 'state',
        description: 'State *',
        group: restaurantGroup,
        required: true,
      },
      {
        name: 'zip',
        description: 'Zip Code *',
        group: restaurantGroup,
        required: true,
      },
      {
        name: 'mainEmail',
        description: 'Restaurant email',
        group: restaurantGroup,
        helperText: 'Email address where customers can contact the restaurant with questions',
      },
      {
        name: 'mainPhone',
        description: 'Restaurant phone',
        group: restaurantGroup,
        helperText: 'For customers to place takeout orders, etc.'
      },
      {
        name: 'contactPhone',
        description: contactDescription,
        group: contactGroup,
        helperText: 'This number is never shared publicly',
      },
    ],
  },
};

// TODO -- clean these gql queries up
const CREATE_BIZ_AND_UPDATE_USER = gql`
  mutation createBizAndUpdateUser($bizData: BusinessCreateInput!, $uid: ID!, $userData: UserUpdateInput!) {
    createBusiness(data: $bizData) {
      id
    }
    updateUser(id:$uid, data:$userData) {
      id
    }
  }
`;

const OnboardingStep1 = ({ classes = {}, forward, setBusinessId }) => {
  const userId = useIdentity()?.id;
  if (!userId) throw new Error(`Unable to get authenticated user information`);

  const [createBiz, { loading, error }] = useMutation(CREATE_BIZ_AND_UPDATE_USER, {
    onCompleted: data => {
      console.log(`createbiz completed`, data);
      const id = data?.createBusiness?.id;
      if (!id) throw new Error(`Did not receive new business ID back from API`);
      setBusinessId(id);
      forward();
    },
    // Must provide onError to avoid unhandled Promise rejection
    onError: err => {},
  });

  const onSubmit = (formData, { setSubmitting }) => {
    let { contactPhone, ...bizData } = formData;
    bizData = removeEmpty(bizData);
    const userData = removeEmpty({ contactPhone });

    if (!loading) {
      createBiz({
        variables: {
          bizData,
          uid: userId,
          userData,
        },
      })
        // Restore submit button
        .then(() => setSubmitting(false));
    }
  };

  const errorMsg = getErrorMsg(error);

  return (
    <Grid container spacing={5} className={classes.root} direction="column" alignItems="center">
      {errorMsg && (
        <Grid item md={12}>
          <Alert severity="error">{errorMsg}</Alert>
        </Grid>
      )}
      <Grid item md={8} xs={12}>
        <Typography
          className={classes.stepTitle}
          variant="subtitle1"
        >
          {stepTitle}
        </Typography>
        <ComplexFormBuilder
          schema={requestBizForm.form}
          formAction={onSubmit}
          >
          {({ isSubmitting }) => (
            <div>
              <p>* Required items</p>
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
            </div>
          )}
        </ComplexFormBuilder>
      </Grid>
    </Grid>
  );
};
export default OnboardingStep1;
