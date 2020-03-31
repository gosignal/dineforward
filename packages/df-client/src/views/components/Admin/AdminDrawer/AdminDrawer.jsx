import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
// import { mailFolderListItems, otherMailFolderListItems } from '../AdminWrapper/NavItems';
// import useStyles from './styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';

import AdminDrawerItem from './Item';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import withWidth from '@material-ui/core/withWidth';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    maxWidth: drawerWidth,
    height: '100%',
    zIndex: theme.zIndex.drawer + 99,
  },
  modal: {
    [theme.breakpoints.down('sm')]: {
      top: '56px!important',
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px!important',
    },
    zIndex: '1000!important',
  },
  backdrop: {
    [theme.breakpoints.down('sm')]: {
      top: '56px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px',
    },
  },
}));

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const AdminDrawer = props => {
  const { routes } = props;
  const classes = useStyles();
  const [activeRoute, setActiveRoute] = useState(undefined);
  const [opened, setOpened] = useState(false);
  const toggleMenu = index => setActiveRoute(activeRoute === index ? undefined : index);

  const toggleDrawer = () => setOpened(!opened);

  return (
    <>
      <Drawer
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={true}
        ModalProps={{
          keepMounted: true,
          className: classes.modal,
          BackdropProps: {
            className: classes.backdrop,
          },
          onBackdropClick: toggleDrawer,
        }}
      >
        <List component="div">
          {routes.map((route, index) => {
            return (
              <AdminDrawerItem
                key={index}
                index={index}
                route={route}
                activeRoute={activeRoute}
                toggleMenu={toggleMenu}
                currentPath={false}
              />
            );
          })}
        </List>
      </Drawer>
    </>
  );
};
// export default withStyles(styles)(AdminDrawer);
export default AdminDrawer;

/*
<Hidden mdUp>
        <SwipeableDrawer
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={opened}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          disableBackdropTransition={!iOS}
          ModalProps={{
            keepMounted: false,
            className: classes.modal,
            BackdropProps: {
              className: classes.backdrop,
            },
            onBackdropClick: toggleDrawer,
          }}
        >
          {menu}
        </SwipeableDrawer>
      </Hidden>
      */
