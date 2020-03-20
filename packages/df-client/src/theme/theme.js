import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#69afff',
      main: '#0080ff',
      dark: '#0055cb',
    },
    secondary: {
      light: '#ffa1d4',
      main: '#ff6ea3',
      dark: '#c83a74',
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
