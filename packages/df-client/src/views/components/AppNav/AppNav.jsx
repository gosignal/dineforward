import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from '@material-ui/core';

import { Menu as MenuIcon } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';
import { useDrawer } from '~components/Drawer';
import Logo from '~components/Logo/Logo';

const styles = theme => ({
  root: {
    color: '#000',
    marginBottom: '-100px',
    // background: ({ image }) => `url('${image}')`,
  },
  '@global': {
    a: {
      textDecoration: 'underline',
      color: '#000',
    },
  },
  logo: {
    height: '60px',
    [theme.breakpoints.down('sm')]: {
      height: '40px',
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

const bgTransitionDone = 100;

const AppNav = () => {
  const classes = useStyles();
  const { drawerOpen, toggleDrawer } = useDrawer(false);
  const [ opacity, setOpacity ] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      const newOpacity = pos > bgTransitionDone ? 1 : pos / bgTransitionDone;
      setOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgStyle= {
    backgroundColor: `rgba(250, 250, 250, ${opacity})`,
  };

  return (
    <AppBar style={bgStyle} elevation={0} position="sticky" className={classes.root}>
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
          <Logo className={classes.logo} />
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
