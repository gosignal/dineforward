import React from 'react';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

import { useSearchStyles } from './styles.elements';

export const UserMenu = props => {
  const { anchorEl, handleCloseMenu } = props;
  return (
    <Menu id="user-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
      <MenuItem onClick={handleCloseMenu}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </MenuItem>
      <MenuItem onClick={handleCloseMenu}>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </MenuItem>
      <MenuItem onClick={handleCloseMenu}>
        <ListItemIcon>
          <NotificationsOffIcon />
        </ListItemIcon>
        <ListItemText primary="Disable notifications" />
      </MenuItem>
      <MenuItem onClick={handleCloseMenu}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sign out" />
      </MenuItem>
    </Menu>
  );
};

export const SearchElement = props => {
  const classes = useSearchStyles();
  return (
    <Hidden smUp>
      <Collapse timeout="auto" unmountOnExit>
        <Toolbar className={classes.toolBar}>
          <div className={classes.searchWrapper}>
            <form className={classNames(classes.searchForm, 'mr-0')}>
              <IconButton aria-label="Search" className={classes.searchIcon}>
                <SearchIcon />
              </IconButton>
              <input className={classes.searchInput} type="text" placeholder="Search" />
            </form>
          </div>
        </Toolbar>
      </Collapse>
    </Hidden>
  );
};

export const SearchCollapseElement = props => {
  return (
    <Hidden smUp>
      <Collapse timeout="auto" unmountOnExit>
        <Toolbar className={classes.toolBar}>
          <div className={classes.searchWrapper}>
            <form className={classNames(classes.searchForm, 'mr-0')}>
              <IconButton aria-label="Search" className={classes.searchIcon}>
                <SearchIcon />
              </IconButton>
              <input className={classes.searchInput} type="text" placeholder="Search" />
            </form>
          </div>
        </Toolbar>
      </Collapse>
    </Hidden>
  );
};

export default { UserMenu, SearchElement };
