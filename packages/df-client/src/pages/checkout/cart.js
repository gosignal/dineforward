/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import People from '@material-ui/icons/People';
import Add from '@material-ui/icons/Add';
import Favorite from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

import MaterialTable from 'material-table';
// import { AddBox, ArrowDownward } from '@material-ui/icons';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
// core components

// const useStyles = makeStyles(profilePageStyle);

const useStyles = makeStyles({
  root: {},
});
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

const CartPage = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">Your cart</Typography>
              <MaterialTable
                icons={tableIcons}
                tableHead={['Name', 'City', 'Bought', 'Date']}
                tableData={stubData.donationActivity}
                customCellClasses={[classes.textCenter, classes.textRight, classes.textRight]}
                customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[classes.textCenter, classes.textRight, classes.textRight]}
                customHeadClassesForCells={[0, 4, 5]}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default CartPage;
