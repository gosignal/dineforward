import React from 'react';
import Fade from 'react-reveal/Fade';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const title =
  `We'll make it out of this pandemic. Let's ensure our favorite places do too.`;
const description =
  `In the midst of the COVID-19 pandemic, 15 million restaurant industry
  employees in the US are facing an uncertain future. Many restaurants and
  bars operate on slim margins and most can't survive longer than a few weeks
  without revenue. You can help by Dining Forward.`;

const useStyles = makeStyles(theme => ({
  section: {
    width: '100%',
    margin: '81px 0',
    backgroundColor: '#000',
  },
  contentWrapper: {
    width: '100%',
    padding: '6em 10%',
    backgroundAttachment: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),
      url('https://images.unsplash.com/photo-1583868838589-f6ff3e01cadc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=953&q=80')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#fff',
    height: '200%',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    },

  },
  title: {
    color: '#fff',
    fontSize: '3em',
    paddingBottom: '1em',
  },
  body: {
    color: '#fff',
    fontSize: '2em',
  },
}));


const QuoteSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <Box className={classes.contentWrapper}>
        <Fade>
          <div className={classes.content}>
            <Typography variant="h2" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body1" className={classes.body}>
              {description}
            </Typography>
          </div>
        </Fade>
      </Box>
    </Box>
  );
};

export default QuoteSection;
