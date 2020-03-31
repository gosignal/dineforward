import React from 'react';
import Router from 'next/router';
import Head from 'next/head';

import AppProviders from '~containers/Providers';

// material
import CssBaseline from '@material-ui/core/CssBaseline';
import { DefaultSeo, CourseJsonLd } from 'next-seo';

// Apollo
import { ApolloProvider } from 'react-apollo';
import { withApollo } from '~utils/apollo';

const App = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </React.Fragment>
  );
};

export default withApollo()(App);
