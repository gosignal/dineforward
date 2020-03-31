import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { drawerWidth } from './node_modules/~theme/adminThemeVars';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    minWidth: 0,
    marginLeft: '20px',
    width: '100%',
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '-webkit-overflow-scrolling': 'touch',
  },

  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const Workspace = ({ children, opened }) => {
  const classes = useStyles();
  return <main className={classNames(classes.content, classes[`content-right`])}>{children}</main>;
};

Workspace.prototypes = {
  children: PropTypes.node.isRequired,
  opened: PropTypes.bool,
};

export default Workspace;
