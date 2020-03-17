import { amber } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// const colors = {
//   primary: '#3F51B5',
//   accent: '#FFEB3B',
//   pagebg: '#fff',
// };

const theme = createMuiTheme({
  palette: {
    primary: {
      light: amber[300],
      main: amber[500],
      dark: amber[800],
    },
    secondary: {
      main: amber[100],
    },
    ochre: {
      light: amber[300],
      main: amber[500],
      dark: amber[800],
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
      active: amber[500],
      hover: amber[500],
      selected: amber[500],
    },
  },
  typography: {
    fontFamily: 'Monserrat',
  },
  overrides: {},
});

export default theme;
