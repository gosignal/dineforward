// import fetch from 'node-fetch';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '~theme';

function DFApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default DFApp;
