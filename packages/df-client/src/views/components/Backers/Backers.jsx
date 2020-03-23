import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// material-ui icons
import Person from '@material-ui/icons/Person';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
// core components
import Table from '~theme/prebuilt/components/Table/Table.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';

import style from '../../../theme/prebuilt/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';

const useStyles = makeStyles(style);
const stubData = {
  donationActivity: [
    ['Andrew Mike', 'San Francisco', 'Develop', '2013'],
    ['John Doe', 'San Francisco', 'Design', '2012'],
    ['Alex Mike', 'San Francisco', 'Design', '2010'],
    ['Andrew Mike', 'San Francisco', 'Develop', '2013'],
    ['John Doe', 'San Francisco', 'Design', '2012'],
    ['Alex Mike', 'San Francisco', 'Design', '2010'],
    ['Andrew Mike', 'San Francisco', 'Develop', '2013'],
    ['John Doe', 'San Francisco', 'Design', '2012'],
    ['Alex Mike', 'San Francisco', 'Design', '2010'],
    ['Andrew Mike', 'San Francisco', 'Develop', '2013'],
    ['John Doe', 'San Francisco', 'Design', '2012'],
    ['Alex Mike', 'San Francisco', 'Design', '2010'],
  ],
};
const Backers = () => {
  const classes = useStyles();
  return (
    <Table
      tableHead={['Name', 'City', 'Bought', 'Date']}
      tableData={stubData.donationActivity}
      customCellClasses={[classes.textCenter, classes.textRight, classes.textRight]}
      customClassesForCells={[0, 4, 5]}
      customHeadCellClasses={[classes.textCenter, classes.textRight, classes.textRight]}
      customHeadClassesForCells={[0, 4, 5]}
    />
  );
};

export default Backers;
