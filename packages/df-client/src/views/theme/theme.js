import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    palette: {
      primary1Color: '#00e5ff',
      primary2Color: '#0097a7',
      canvasColor: '#ffffff',
      textColor: 'rgba(0, 0, 0, 0.79)',
      secondaryTextColor: 'rgba(0, 0, 0, 0.26)',
      alternateTextColor: 'rgba(0, 0, 0, 0.26)',
      shadowColor: '#ffffff',
      accent1Color: 'rgba(250, 250, 250, 0.25)',
      accent2Color: 'rgba(158, 158, 158, 0.06)',
      primary3Color: 'rgba(158, 158, 158, 0.65)',
      accent3Color: 'rgba(224, 224, 224, 0.3)',
    },
    typography: {
      fontFamily: 'jaf-bernina-sans, sans-serif',
      fontWeight: '400',
      fontStyle: 'normal',
    },
  },
});

// const getTheme = () => {
//   const overwrites = {
//     palette: {
//       primary1Color: Colors.cyanA400,
//       primary2Color: Colors.cyan700,
//       canvasColor: Colors.white,
//       textColor: fade(Colors.black, 0.79),
//       secondaryTextColor: fade(Colors.minBlack, 0.26),
//       alternateTextColor: fade(Colors.minBlack, 0.26),
//       shadowColor: Colors.white,
//       accent1Color: fade(Colors.grey50, 0.25),
//       accent2Color: fade(Colors.grey500, 0.06),
//       primary3Color: fade(Colors.grey500, 0.65),
//       accent3Color: fade(Colors.grey300, 0.3),
//     },
//     typography: {
//       fontFamily: 'jaf-bernina-sans, sans-serif',
//       fontWeight: '400',
//       fontStyle: 'normal',
//     },
//   };

//   return getMuiTheme(baseTheme, overwrites);
// };

// const theme = getTheme();

export default theme;
