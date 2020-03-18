import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: '#000',
      dark: blue[800],
    },
    secondary: {
      main: blue[100],
    },
    error: {
      main: '#e35c37',
    },
    rose: {
      main: '#E3B137',
    },
    background: {
      default: '#fff',
    },
    action: {
      active: blue[500],
      hover: blue[500],
      selected: blue[500],
    },
  },
  typography: {
    fontFamily: 'jaf-bernina-sans, sans-serif',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  overrides: {
    MuiTypography: {
      body1: {
        color: blue[500],
      },
      subheading: {
        color: blue[500],
      },
    },
  },
});

export default theme;
