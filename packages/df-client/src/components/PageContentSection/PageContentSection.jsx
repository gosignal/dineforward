import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';

const PageContentSection = props => {
  const { children } = props;
  const classes = useStyles();
  return <div className={classNames(classes.main, classes.mainRaised)}>{children}</div>;
};

export default PageContentSection;
