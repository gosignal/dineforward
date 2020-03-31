import React from 'react';
import { PageTransition } from 'next-page-transitions';
import { DefaultSeo } from 'next-seo';

import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Loader from '~components/Loader';
import theme, { globalStyles } from '~theme/flux-mui.adapter';
// import { DrawerProvider } from '~components/Drawer';
import AppSettingsProvider from './SettingsProvider';

const { title, description, HOST } = {
  title: 'DineForward',
  description: 'Help Restaurants in need',
  HOST: 'https://dineforward.org',
};
const TIMEOUT = 400;
// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());
//  <PageTransition
//         timeout={TIMEOUT}
//         classNames="page-transition"
//         loadingComponent={<Loader />}
//         loadingDelay={500}
//         loadingTimeout={{
//           enter: TIMEOUT,
//           exit: 0,
//         }}
//         pageTransitionReadyToEnter={null}
//         loadingClassNames="loading-indicator"
//       ></PageTransition>
const AppProvider = ({ children }) => {
  return (
    <AppSettingsProvider>
      <DefaultSeo
        title={title}
        description={description}
        openGraph={{
          url: 'https://dineforward.org',
          title,
          description,
          images: [{ url: `${HOST}/images/social_fb` }, { url: `${HOST}/images/social_twitter` }],
          // eslint-disable-next-line @typescript-eslint/camelcase
          site_name: 'COVID-19 Help Restaurants in need',
        }}
        twitter={{
          handle: '@dineforward',
          site: '@dineforward',
          cardType: 'summary_large_image',
        }}
      />
      <PageTransition timeout={300} classNames="page-transition">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
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
        </ThemeProvider>
      </PageTransition>
    </AppSettingsProvider>
  );
};

export default withStyles(globalStyles)(AppProvider);
