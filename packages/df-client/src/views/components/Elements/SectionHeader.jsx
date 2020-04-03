import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '50px',
    paddingBottom: '50px',
    textAlign: 'center',
    // [theme.breakpoints.down('md')]: {

    // },
  },
  SectionHeaderIcon: {
    width: '100%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
const SectionHeader = ({ classes, title, subtitle, Icon }) => {
  const local = useStyles();
  return (
    <div className={classNames(classes.root, local.root)}>
      {Icon ? (
        <div className={classNames(classes.SectionHeaderIcon, local.SectionHeaderIcon)}>
          <Icon />
        </div>
      ) : null}
      <Typography variant="h1" classes={{ h1: classes.title }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" classes={{ subtitle1: classes.subtitle }}>
        {subtitle}
      </Typography>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  Icon: PropTypes.any,
};

export default SectionHeader;
