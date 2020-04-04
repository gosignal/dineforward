import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import classnames from 'classnames/bind';
import styles from './fakeBrowser.css';

const cx = classnames.bind(styles);

const useStyles = makeStyles(theme => ({
  root: {

    textAlign: 'center',
    padding: 0,
  },
}));

const FakeBrowser = ({ children, url }) => {
  const classes = useStyles();

  return (
    <Container classes={{ root: classes.root }}>
      <div className={cx('browser-wrapper')}>
        <div className={cx('browser-navigation-bar')}>
        <i></i>
        <i></i>
        <i></i>
        <input value={url} disabled></input>
        </div>
    
        <div className={cx('browser-container')}>
          {children}
        </div>
      </div>
    </Container>
  );
};

export default FakeBrowser;
