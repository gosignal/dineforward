import React, { useState, useContext, createContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import AppSettingsContext from '~ctx/AppContext';

import { navRoutes } from '~components/AppNav/NavRoutes';

const useStyles = makeStyles({
  list: {
    width: 250,
    height: '100vh',
  },
  fullList: {
    width: 'auto',
  },
});

export const useDrawer = () => {
  const {
    drawer: [drawerOpen, toggleDrawer],
  } = useContext(AppSettingsContext);

  return {
    drawerOpen,
    toggleDrawer,
  };
};

const Drawer = props => {
  const classes = useStyles();
  const { drawerOpen, toggleDrawer } = useDrawer();

  const list = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {navRoutes.map((route, index) => {
          const { Icon, name } = route;
          return (
            <ListItem button key={index}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={'left'}
          open={drawerOpen}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};
/* </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */
export default Drawer;
