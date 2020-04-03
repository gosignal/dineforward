/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { menuWidgets } from '~config/stubData';


const useStyles = makeStyles(theme => ({
  root: {
    //backgroundColor: '#fff',
    padding: '50px 10%',
  },
  a: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  li: {
    listStyleType: 'none',
  },
  icon: {
    verticalAlign: 'text-top',
    fontSize: '1.2em',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        {menuWidgets.map(widget => (
          <Grid item md={4} sm={12} key={widget.id}>
            <Typography className="widget_title" variant="h3">
              {widget.title}
            </Typography>
            <ul>
              {widget.menu.map(item => (
                <li key={item.id} className={classes.li}>
                  <Link href={item.link}>
                    <a className={classes.a}>{item.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid item sm={12}>
          <div align="center">
            &copy;{1900 + new Date().getYear()}, All rights reserved. Made with{' '}
            <Favorite className={classes.icon} /> by{' '}
            <a href="http://fullsignal.co" target="_blank" rel="noopener noreferrer" className={classes.a}>
              Signal Labs
            </a>
            {' '}in Oakland, CA
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
