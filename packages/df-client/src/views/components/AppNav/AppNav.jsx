import Link from 'next/link';
import {
  Box,
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
  '@global': {
    a: {
      textDecoration: 'none',
      color: '#000',
    },
  },
  headerSection: {
    display: 'flex',
    height: '30vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    backgroundSize: 'cover',
  },
  loginButton: {
    marginLeft: '30px',
  },
  restaurantButton: {
    backgroundColor: '#ab004f',
    color: '#ffffff'
  },
  spacer: {
    flexGrow: 1,
  },
});
const useStyles = makeStyles(styles);

const AppNav = () => {
  const classes = useStyles();
  const { drawerOpen, toggleDrawer } = useDrawer(false);
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
          <a>
            <Typography variant="h6" className={classes.title}>
              Dine
              <strong>
                <i>Forward</i>
              </strong>
            </Typography>
          </a>
        </Link>

        <div className={classes.spacer}></div>
        <Box display={{ xs: 'none', sm: 'block' }}>
          <Link href="/restaurants">
            <Button
              classes={{ root: classes.restaurantButton }}
              variant="contained"
              size="large"
            >
              Are you a restaurant?
            </Button>
          </Link>
          {/*
          <Link href="/login">
            <Button
              classes={{ root: classes.loginButton }}
              variant="contained"
              color="secondary"
              size="large"
            >
              Login
            </Button>
          </Link>
          */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNav;
