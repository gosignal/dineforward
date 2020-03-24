export default undefined;
/*
import * as React from 'react';

import { PassportSessionWhereInput } from '~gen/graphql';
// import {PassportSessionWhereInput} from '~gql'
import redirect from './redirect';

import { NextContextWithApollo } from '../../interfaces/NextContextWithApollo';

export const withAuth = <T extends object>(C: React.ComponentClass<T> | React.FC) => {
  return class AuthComponent extends React.Component<T> {
    public static async getInitialProps({ apolloClient, ...ctx }: NextContextWithApollo) {
      try {
        const response = await apolloClient.query<PassportSessionWhereInput>({
          query: {},
        });

        if (!response || !response.data || !response.data.me) {
          redirect(ctx, '/login');
        }

        return {
          me: response.data.me,
        };
      } catch (error) {
        console.error(error);

        redirect(ctx, '/login');
      }

      return {
        me: null,
      };
    }

    public render() {
      return <C {...this.props} />;
    }
  };
};
*/
