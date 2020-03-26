import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  panel: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: 'calc(100vh)',
    minHeight: 'auto',
    // [theme.breakpoints.down('sm')]: {
    //   height: 'auto',
    //   minHeight: 'calc(100vh - 64px)',
    //   paddingTop: '64px',
    // },
    // [theme.breakpoints.down('xs')]: {
    //   height: 'auto',
    //   minHeight: 'calc(100vh - 56px)',
    //   paddingTop: '56px',
    // },
    // [theme.breakpoints.up('sm')]: {
    //   height: 'calc(100vh - 64px)',
    // },
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  panelContent: {
    width: 'calc(100% - 250px)',
    display: 'block',
  },
  speedDial: {
    position: 'absolute',
    // bottom: theme.spacing(1) * 2,
    // right: theme.spacing(1) * 3,
  },
}));

export default useStyles;
