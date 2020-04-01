import React, { Fragment } from 'react';
import { request } from 'graphql-request';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import gql from 'graphql-tag';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import { getAllBusinesses } from '~utils/api';

import Grid from '@material-ui/core/Grid';
import {
  WizardSteps,
  OnboardingStep1,
  OnboardingStep2,
  OnboardingStep3,
} from '~containers/Onboarding';

import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '200px',
    paddingTop: '200px',
  },
  container: {
    marginTop: '200px',
  },
  progressBar: {
    margin: theme.spacing(1),
  },
}));

const BusinessRequestPage = ({ allBusinesses }) => {
  const classes = useStyles();

  // TODO -- clean these gql queries up
  const CREATE_BIZ = gql`
    mutation createBiz($data: BusinessCreateInput!) {
      createBusiness(data: $data) {
        name
        description
      }
    }
  `;
  const [addBizRequest, { data: bizData, loading, error }] = useMutation(CREATE_BIZ, {
    onCompleted: data => console.log(`completed - ${data}`),
    onError: error => console.log(`error - ${error}`),
  });
  const UiReactToQuery = ({ children }) => {
    // another messy implementation... fix this...
    if (loading) return <b>Loading...</b>;
    if (error) return <b>Error...</b>;
    return <React.Fragment>{children}</React.Fragment>;
  };
  return (
    <ContentPageLayout className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h2">Thank you, please tell us about your business</Typography>
        </Grid>
        <Grid item xs={12}>
          <WizardSteps
            allSteps={[
              {
                name: 'About your business',
                Component: () => (
                  <UiReactToQuery>
                    <OnboardingStep1
                      onNext={data => {
                        console.log({ data });
                        addBizRequest({ variables: { data } });
                      }}
                    />
                  </UiReactToQuery>
                ),
                order: 1,
              },
              {
                name: 'About your funding Goals',
                Component: () => <OnboardingStep2 />,
              },
              {
                name: 'Preview your profile',
                Component: () => <OnboardingStep3 />,
              },
            ]}
          />
          {/* //technically you can't trust the order of an array, but fuck it -- weird times today.  */}
        </Grid>
      </Grid>
    </ContentPageLayout>
  );
};

export default BusinessRequestPage;