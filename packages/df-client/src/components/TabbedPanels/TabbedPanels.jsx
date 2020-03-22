import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `faq-tab-${index}`,
    'aria-controls': `faq-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const TabbedPanels = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState(props.tabs);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} aria-label={props.name}>
        {tabs.map((tab, index) => {
          return <Tab label={tab.name} index={index} {...a11yProps(tab.label)} />;
        })}
      </Tabs>
      <TabPanel value={value} index={0}>
        {tabs[0].content}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {tabs[1].content}
      </TabPanel>
    </div>
  );
};

export default TabbedPanels;
