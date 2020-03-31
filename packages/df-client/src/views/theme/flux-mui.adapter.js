import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import flux from './flux-theming-system';

const drawerWidth = 260;
const notificationCenterWidth = 300;
const MobileBreakpoint = 960;
console.log('testtttt');
console.log({ color: flux.base.colorsHex });
const themeOptions = {
  palette: {
    primary: {
      main: flux.base.colorsHex.primary.hex(),
    },
    secondary: {
      main: flux.base.colorsHex.secondary.hex(),
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
      ...flux.typeface.primary,
      fontSize: '1.5em',
    },
    h6: {
      fontWeight: 400,
    },
    subtitle1: {
      ...flux.typeface.secondary,
      fontWeight: 400,
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
  overrides: {
    MuiFab: {
      extended: {
        padding: '0 24px',
      },
      label: {
        fontSize: '1rem',
      },
    },
  },
};

export const globalStyles = {
  '@global': {
    body: {
      color: flux.base.colorsHex.black.hex(),
      lineHeight: '1.8em',
    },
  },
};

const theme = createMuiTheme(themeOptions, globalStyles);

export default theme;
