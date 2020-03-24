import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import { User } from './types';

export const checkLoggedIn = (apolloClient: ApolloClient<InMemoryCache>) =>
  apolloClient.query({
    fetchPolicy: 'cache-first',

    query: gql`
      query authenticatedUser {
        me {
          email
          id
          role
          name
        }
      }
    `,
  });
