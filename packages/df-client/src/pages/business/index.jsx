import React, { Fragment } from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';
import RequestForm from '~components/RequestForm';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// this is only going to work client side, fyi...
const client = new ApolloClient({
  uri: 'http://localhost:8000/admin/api',
});

const RestaurantPage = () => {
  return (
    <ApolloProvider client={client}>
      <NewLayout navbar>
        <ContentPage title="Restaurants" subtitle="Sign up now">
          <RequestForm />
        </ContentPage>
      </NewLayout>
    </ApolloProvider>
  );
};

export const getStaticProps = async () => {
  return { props: {} };
};

export const getStaticpaths = async () => {
  return {};
};

export default RestaurantPage;
