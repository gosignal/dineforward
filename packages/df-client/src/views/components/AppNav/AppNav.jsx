import Link from 'next/link';
import {
  Grid,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';

import { Menu as MenuIcon } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';
import { useDrawer } from '~components/Drawer';

const styles = theme => ({
  root: {
    background: 'transparent',
    color: '#000',
    marginBottom: '-100px',
    // background: ({ image }) => `url('${image}')`,
  },
  logoLink: {
    textDecoration: 'none',
    color: '#000',
  },
  headerSection: {
    display: 'flex',
    height: '30vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    backgroundSize: 'cover',
  },
});
const useStyles = makeStyles(styles);

const AppNav = () => {
  const classes = useStyles();
  const { drawerOpen, toggleDrawer } = useDrawer(false);
  console.log({ drawerOpen });
  return (
    <AppBar elevation={0} position="sticky" color="transparent" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          onClick={toggleDrawer}
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a className={classes.logoLink}>
            <Typography variant="h6" className={classes.title}>
              Dine
              <strong>
                <i>Forward</i>
              </strong>
            </Typography>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppNav;
