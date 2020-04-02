import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import flux from './flux-theming-system';

const drawerWidth = 260;
const notificationCenterWidth = 300;
const MobileBreakpoint = 960;

const themeOptions = {
  palette: {
    primary: {
      main: flux.base.colorsHex.primary.hex(),
    },
    secondary: {
      main: flux.base.colorsHex.secondary.hex(),
    },
    facebook: {
      main: flux.base.colors.facebook.hex(),
    },
    google: {
      main: flux.base.colors.google.hex(),
    },
  },
  typography: {
    fontFamily: flux.typeface.global,
    h1: {
      ...flux.typeface.primary,
      fontSize: '3em',
    },
    h2: {
      ...flux.typeface.primary,
      fontSize: '2.5em',
    },
    h3: {
      ...flux.typeface.primary,
      fontSize: '2.25em',
    },
    h4: {
      ...flux.typeface.primary,
      fontSize: '3.2em',
    },
    h5: {
      ...flux.typeface.secondary,
      fontSize: '1.6em',
      fontWeight: 400,
      lineHeight: '2em',
    },
    h6: {
      fontWeight: 400,
    },
    subtitle1: {
      ...flux.typeface.primary,
      fontWeight: 400,
      fontSize: '2em',
      lineHeight: '2.5em',
    },
    subtitle2: {
      ...flux.typeface.secondary,
      fontWeight: 400,
      fontSize: '2em',
      color: '#3F3B3B',
      lineHeight: '2.5em',
    },
    overline: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: 2,
    },
    button: {
      ...flux.typeface.secondary,
      fontWeight: 800,
    },
  },
  shape: {
    borderRadius: flux.base.generics.borderRadius, // to change
  },
  flux: {
    cardShadow: {
      boxShadow: flux.base.boxShadows.default,
    },
  },
  overrides: {
    MuiFab: {
      extended: {
        padding: '0 24px',
      },
      label: {
        fontSize: '1rem',
      },
    },
    // MuiCssBaseline: {
    //   '@global': {
    //     '@font-face': [flux.typeface.global.fontFamily].toString(),
    //     // color: flux.typeface.color.rgbNumber(),
    //   },
    // },
  },
};

export const globalStyles = {
  '@global': {
    body: {
      color: flux.base.colorsHex.black.hex(),
      // fontFamily: flux.typeface.primary.fontFamily,
      fontFamily: 'Comic Sans, Helvetica',
      lineHeight: '1.8em',
    },
  },
};

const theme = createMuiTheme(themeOptions, globalStyles);

export default theme;
