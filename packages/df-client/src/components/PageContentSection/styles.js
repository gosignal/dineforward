import { makeStyles } from '@material-ui/core/styles';

import { main, mainRaised } from '~theme/dineforward-theme';

const style = {
  main: {
    ...main,
    width: '100%',
  },
  mainRaised: {
    ...mainRaised,
  },
};

const useStyles = makeStyles(style);

export default useStyles;
