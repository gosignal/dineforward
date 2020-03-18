import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ccc',
      main: '#000',
      dark: '#000',
    },
    secondary: {
      main: blue[900],
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
  overrides: {},
});

export default theme;
