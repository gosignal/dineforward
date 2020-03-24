import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

// material
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

// Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Apollo
import { ApolloProvider } from 'react-apollo';
import withApollo from '~utils/apollo/withApollo';

// import fetch from 'node-fetch';
// import { ThemeProvider } from '@material-ui/system';
import { ResetCSS } from '~theme/sp-theme/assets/css/style';
import theme from '~theme';
import { charityTheme } from '~theme/sp-theme/theme/charity';
import { GlobalStyle, CharityWrapper, ContentWrapper } from '../views/containers/dineforward.style';

// import CommonFooter from '~components/Layout/LayoutFooter';
import { PageTransition } from 'next-page-transitions';

import Loader from '~components/Loader';

const TIMEOUT = 400;

const stripePromise = loadStripe('pk_test_RqCK9ALQcoHssy6NpPP7lo8D');

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps, apolloClient }) => {
  React.useEffect(() => {
    if (window) {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  }, []);

  // const [loading, setLoading] = React.useState(false);

  // Router.events.on('routeChangeStart', () => {
  //   setLoading(true);
  // });
  // Router.events.on('routeChangeComplete', () => {
  //   setLoading(false);
  // });
  const TIMEOUT = 400;
  return (
    <ApolloProvider client={apolloClient}>
      <Elements stripe={stripePromise}>
        <React.Fragment>
          <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingComponent={<Loader />}
            loadingDelay={500}
            loadingTimeout={{
              enter: TIMEOUT,
              exit: 0,
            }}
            loadingClassNames="loading-indicator"
          >
            <ThemeProvider theme={charityTheme}>
              <CharityWrapper />
              <CssBaseline />
              <ResetCSS />
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
          </PageTransition>
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
        </React.Fragment>
      </Elements>
    </ApolloProvider>
  );
};

// function DFApp({ Component, pageProps }) {
//   React.useEffect(() => {
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Component {...pageProps} />;
//     </ThemeProvider>
//   );
// }

// export default App;
export default withApollo(App);
