import { makeStyles } from '@material-ui/core/styles';

const notificationCenterWidth = 300;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: notificationCenterWidth,
    maxWidth: notificationCenterWidth,
    [theme.breakpoints.down('sm')]: {
      top: '56px!important',
      height: 'calc(100vh - 56px)',
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px!important',
      height: 'calc(100vh - 64px)',
    },
    zIndex: theme.zIndex.drawer + 99,
  },
  modal: {
    [theme.breakpoints.down('sm')]: {
      top: '56px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px',
    },
    zIndex: theme.zIndex.drawer + 99,
  },
  backdrop: {
    [theme.breakpoints.down('sm')]: {
      top: '56px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px',
    },
  },
  container: {
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    zIndex: 1,
    flexGrow: 1,
  },
  tabsRoot: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: '50%',
    color: theme.palette.text.primary,
  },
  padding: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1) * 2,
      paddingRight: theme.spacing(1) * 2,
      paddingTop: theme.spacing(1) * 2,
      paddingBottom: theme.spacing(1) * 2,
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1) * 3,
      paddingRight: theme.spacing(1) * 3,
      paddingTop: theme.spacing(1) * 2,
      paddingBottom: theme.spacing(1) * 2,
    },
  },
}));

export default useStyles;
