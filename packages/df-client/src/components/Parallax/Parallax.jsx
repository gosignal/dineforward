import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { useStyles, styles } from './styles';

export default function Parallax(props) {
  let windowScrollTop;

  const [transform, setTransform] = React.useState(`translate3d(0,${windowScrollTop}px,0)`);
  React.useEffect(() => {
    if (window !== 'undefined') {
      if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3;
      } else {
        windowScrollTop = 0;
      }
      if (window.innerWidth >= 768) {
        window.addEventListener('scroll', resetTransform);
      }
      return function cleanup() {
        if (window.innerWidth >= 768) {
          window.removeEventListener('scroll', resetTransform);
        }
      };
    }
  });
  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };

  const { filter, className, children, style, image, height, small } = props;
  const classes = useStyles({ height });
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes[`${filter}Color`]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined,
  });

  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        transform,
      }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.oneOf(['primary', 'rose', 'dark', 'info', 'success', 'warning', 'danger']),
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
  height: PropTypes.string,
};
