import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[800],
    },
    secondary: {
      main: blue[100],
    },
    ochre: {
      light: blue[300],
      main: blue[500],
      dark: blue[800],
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
    fontFamily: 'Monserrat',
  },
  overrides: {},
});

export default theme;
