import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import styles from '~theme/prebuilt/jss/material-kit-pro-react/components/parallaxStyle.js';

const useStyles = makeStyles(styles);

export default function FullPage(props) {
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const bgClasses = classNames({
    [classes.parallax]: true,
    [classes[`${filter}Color`]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={bgClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
      }}
    >
      {children}
    </div>
  );
}

FullPage.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.oneOf(['primary', 'rose', 'dark', 'info', 'success', 'warning', 'danger']),
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};
