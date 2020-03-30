import React, { Fragment } from 'react';
import { request } from 'graphql-request';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';
import TabbedPanels from '~components/TabbedPanels';
import { getAllBusinesses } from '~utils/api';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import GeoSearchBox from '~components/SearchBox/GeoSearchbox';

import Grid from '@material-ui/core/Grid';

const requestBizForm = {
  form: {
    name: 'Request to add a business',
    fieldgroups: ['Business Info'],
    fields: [
      {
        name: 'name',
        label: 'Your Name',
        group: 'Business Info',
      },
      {
        name: 'email',
        label: 'Your Email',
        group: 'Business Info',
      },
      {
        name: 'description',
        label: 'Your Phone Number',
        group: 'Business Info',
      },
      {
        name: 'businessname',
        label: 'Business Name',
        group: 'Business Info',
      },
      {
        name: 'address1',
        label: 'Address 1',
        group: 'Business Info',
      },
      {
        name: 'adddress2',
        label: 'Address 2',
        group: 'Business Info',
      },
      {
        name: 'city',
        label: 'City',
        group: 'Business Info',
      },
      {
        name: 'state',
        label: 'State',
        group: 'Business Info',
      },
    ],
  },
};

const BusinessRequestPage = ({ allBusinesses }) => {
  const [place, setPlace] = React.useState('');
  const handleSetPlace = incomingplace => {
    console.log(incomingplace);
    setPlace(incomingplace);
  };
  return (
    <NewLayout navbar>
      <ContentPage
        title="Request to add your business"
        subtitle="Fill it out and we will get back to you asap."
      >
        <Grid container spacing={5}>
          <Grid item md={12}>
            <GeoSearchBox setPlace={handleSetPlace} />
          </Grid>
          <Grid item md={12}>
            <ComplexFormBuilder
              IncomingValues={place}
              schema={requestBizForm}
              formAction={vals => {
                console.log(vals);
              }}
            />
          </Grid>
        </Grid>
      </ContentPage>
    </NewLayout>
  );
};

// export const getStaticProps = async () => {
//   const { allBusinesses } = await getAllBusinesses();

//   return { props: { allBusinesses } };
// };

// export const getStaticpaths = async () => {
//   return {};
// };

export default BusinessRequestPage;
