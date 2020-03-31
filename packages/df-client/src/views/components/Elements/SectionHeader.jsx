import React from 'react';
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
const SectionHeader = ({ title, subtitle, Icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {Icon ? (
        <div className={classes.SectionHeaderIcon}>
          <Icon />
        </div>
      ) : null}
      <Typography variant="h1">{title}</Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  Icon: PropTypes.any,
};

export default SectionHeader;
