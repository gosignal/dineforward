import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import Card from '@material-ui/core/Card';
// import CardBody from '@material-ui/core/CardBody';
import ListItem from '@material-ui/core/ListItem';

import CommonStyles from './CommonStyles';
import Favorite from '@material-ui/icons/Favorite';

const useStyles = makeStyles(CommonStyles);
const LayoutFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a href="/business/register" className={classes.block}>
              Signup as a business
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="/about" className={classes.block}>
              About us
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="/blog" className={classes.block}>
              Blog
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="/tos" className={classes.block}>
              Terms & Privacy
            </a>
          </ListItem>
        </List>
      </div>
      <div className={classes.right}>
        &copy; {1900 + new Date().getYear()} , All rights reserved. Made with{' '}
        <Favorite className={classes.icon} /> by{' '}
        <a href="https://fullsignal.co" target="_blank">
          Signal Labs
        </a>{' '}
        in Oakland, CA
      </div>
    </div>
  );
};

export default LayoutFooter;
