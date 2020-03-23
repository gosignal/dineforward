import * as React from 'react';
import Link from 'next/link';
import { List, ListItem, ListItemIcon, ListItemText, Theme, withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = (theme: Theme) => ({
  link: {
    textDecoration: 'inherit',
  },
  activeLink: {
    backgroundColor: theme.palette.action.selected,
    '& button': {
      backgroundColor: 'inherit',
    },
    '& button div h3': {
      fontWeight: 'bold',
    },
  },
});

const AdminNav = () => {
  return (
    <AppBar>
      <Toolbar />
    </AppBar>
  );
};

export default AdminNav;
