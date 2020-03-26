import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // palette: {
    //   primary1Color: '#00e5ff',
    //   primary2Color: '#0097a7',
    //   canvasColor: '#ffffff',
    //   textColor: 'rgba(0, 0, 0, 0.79)',
    //   secondaryTextColor: 'rgba(0, 0, 0, 0.26)',
    //   alternateTextColor: 'rgba(0, 0, 0, 0.26)',
    //   shadowColor: '#ffffff',
    //   accent1Color: 'rgba(250, 250, 250, 0.25)',
    //   accent2Color: 'rgba(158, 158, 158, 0.06)',
    //   primary3Color: 'rgba(158, 158, 158, 0.65)',
    //   accent3Color: 'rgba(224, 224, 224, 0.3)',
    // },
    shadows: ['none'],
    typography: {
      fontFamily: 'jaf-bernina-sans, sans-serif',
      fontWeight: '400',
      fontStyle: 'normal',
    },
  },
});

export default theme;
