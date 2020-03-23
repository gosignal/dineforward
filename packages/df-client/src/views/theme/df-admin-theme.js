import getMuiTheme from '@material-ui/styles/getMuiTheme';
import baseTheme from '@material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from '@material-ui/styles/colors';
import { fade } from '@material-ui/utils/colorManipulator';

const getTheme = () => {
  let overwrites = {
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
  };
  return getMuiTheme(baseTheme, overwrites);
};
