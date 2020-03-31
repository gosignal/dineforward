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

/*
 <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
        */
// export default App;
export default withApollo()(App);
