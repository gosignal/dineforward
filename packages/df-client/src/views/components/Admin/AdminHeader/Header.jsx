import React, { useState } from 'react';
import classNames from 'classnames';

// Material UI
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';

import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';
import { UserMenu } from './Header.elements';

import useStyles from './styles';

const Header = ({ logo, logoAltText, toggleDrawer, toogleNotifications }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [opened, setOpened] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const handleSettingsToggle = event => setAnchorEl(event.currentTarget);
  const [openSpeedDial, setOpenSpeedDial] = useState(false);
  const handleCloseMenu = () => setAnchorEl(null);
  const handleDrawerToggle = () => {
    setOpened(!opened);
  };

  const handleNotificationToggle = () => {
    toogleNotifications();
  };

  const handleSpeedDialOpen = () => setOpenSpeedDial(true);

  // <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
  //   <MenuIcon />
  // </IconButton>;
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <IconButton color="inherit" aria-label="open drawer">
          {' '}
        </IconButton>
        <div className={classes.branding}>
          <img src={logo} alt={logoAltText} className={classes.logo} />
        </div>
        <div className={classes.searchWrapper} />
        <IconButton color="inherit" onClick={handleNotificationToggle}>
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          aria-label="User Settings"
          aria-owns={anchorEl ? 'user-menu' : null}
          aria-haspopup="true"
          color="inherit"
          onClick={handleSettingsToggle}
        >
          <MoreVertIcon />
        </IconButton>
        <UserMenu anchorEl={anchorEl} handleCloseMenu={handleCloseMenu} />
      </Toolbar>
    </AppBar>
  );
};

Header.prototypes = {
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
};

export default Header;
