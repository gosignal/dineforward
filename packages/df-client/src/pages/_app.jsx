import React from 'react';
import App from 'next/app';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// import fetch from 'node-fetch';
// import { ThemeProvider } from '@material-ui/system';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ResetCSS } from '~theme/sp-theme/assets/css/style';
import theme from '~theme';
import { charityTheme } from '~theme/sp-theme/theme/charity';
import { GlobalStyle, CharityWrapper, ContentWrapper } from '~containers/dineforward.style';
import CommonFooter from '~components/Layout/LayoutFooter';

const stripePromise = loadStripe('pk_test_RqCK9ALQcoHssy6NpPP7lo8D');

class DFApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Elements stripe={stripePromise}>
        <React.Fragment>
          <ThemeProvider theme={charityTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CharityWrapper>
              <CssBaseline />
              <ResetCSS />
              <GlobalStyle />
              <Component {...pageProps} />
            </CharityWrapper>
          </ThemeProvider>
        </React.Fragment>
      </Elements>
    );
  }
}

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

export default DFApp;
