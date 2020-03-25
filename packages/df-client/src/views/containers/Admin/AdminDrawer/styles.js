import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    maxWidth: drawerWidth,
    height: '100%',
    zIndex: theme.zIndex.drawer + 99,
  },
  // modal: {
  //   [theme.breakpoints.down('sm')]: {
  //     top: '56px!important',
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     top: '64px!important',
  //   },
  //   zIndex: '1000!important',
  // },
  // backdrop: {
  //   [theme.breakpoints.down('sm')]: {
  //     top: '56px',
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     top: '64px',
  //   },
  // },
}));

export default useStyles;
