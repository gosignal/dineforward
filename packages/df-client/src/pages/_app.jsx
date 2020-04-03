import React from 'react';
import AppProviders from '~containers/Providers';
import Footer from '~components/Footer';
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
        <Footer />
      </AppProviders>
    </React.Fragment>
  );
};

export default withApollo()(App);
