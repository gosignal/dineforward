import React, { useState } from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import useStyles from './styles';
import { notifications } from './stubs';

const NotificationCenter = ({ notificationsOpen, toogleNotifications }) => {
  const classes = useStyles();
  const [tab, setTab] = useState(1);
  const [stocks, setStocks] = useState(undefined);
  const [forecast, setForecast] = useState(undefined);
  const [today] = useState(Date.now());

  const handleTabToggle = (event, tab) => setTab(tab);

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={notificationsOpen}
      ModalProps={{
        keepMounted: false,
        className: classes.modal,
        BackdropProps: {
          className: classes.backdrop,
        },
        onBackdropClick: toogleNotifications,
      }}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Tabs
        value={tab}
        onChange={handleTabToggle}
        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        centered
      >
        <Tab classes={{ root: classes.tabRoot }} label="Today" />
        <Tab classes={{ root: classes.tabRoot }} label="Notifications" />
      </Tabs>
      <div className={classes.container}>
        {tab === 1 && (
          <List>
            {notifications.map((notification, index) => (
              <ListItem button key={index}>
                {notification.avatar}
                <ListItemText primary={notification.title} secondary={notification.subtitle} />
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </Drawer>
  );
};

NotificationCenter.propTypes = {
  notificationsOpen: PropTypes.bool,
  toogleNotifications: PropTypes.func,
};

export default NotificationCenter;
