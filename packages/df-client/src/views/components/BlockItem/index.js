import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.flux.cardShadow,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    textDecoration: 'none',
    padding: '50px 20px',
    [theme.breakpoints.up('md')]: {
      height: '400px',
    },
  },
  title: {
    ...theme.typography.subtitle1,
    lineHeight: '1em',
    textAlign: 'center',
  },
  subtitle: {
    ...theme.typography.subtitle1,
    textAlign: 'center',
    fontSize: '1.25em',
    [theme.breakpoints.up('md')]: {
      height: '80px',
    },
  },
  icon: {
    textAlign: 'center',
    minHeight: '45px',
  },
  iconItem: {
    minHeight: '45px',
    fontSize: '3rem',
  },
  actions: {
    textAlign: 'center',
    textDecondation: 'none',
    display: 'block',
  },
  ctaButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textDecoration: 'none',
  },
  link: {
    textDecoration: 'none',
  },
}));

const BlockItem = ({ classes = {}, Icon, title, subtext, btnText, btnUrl }) => {
  const local = useStyles();
  const cn = key => classNames(classes[key], local[key]);

  return (
    <Card className={cn('root')} elevation={0}>
      <CardContent>
        <div className={cn('icon')}>
          <Icon className={cn('iconItem')} />
        </div>
        <Typography variant="h3" className={cn('title')} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" className={cn('subtitle')}>
          {subtext}
        </Typography>
      </CardContent>
      <CardActions className={cn('actions')}>
        {btnUrl || btnText ? (
          <Link href={btnUrl}>
            <a className={cn('link')}>
              <Button variant="contained" size="large" color="secondary" className={cn('ctaButton')}>
                {btnText}
              </Button>
            </a>
          </Link>
        ) : null}
      </CardActions>
    </Card>
  );
};

// BlockItem.propTypes = {
//   className: PropTypes.string,
//   icon: PropTypes.any,
//   title: PropTypes.string,
//   excerpt: PropTypes.string,
//   anchorLink: PropTypes.bool,
//   btnText: PropTypes.string,
//   btnUrl: PropTypes.string,
// };

export default BlockItem;
