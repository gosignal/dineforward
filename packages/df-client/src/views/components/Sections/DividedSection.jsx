import { makeStyles } from '@material-ui/styles';
import FullWidthSection from './FullWidth';

const styles = theme => ({
  fullWidthLeft: {
    width: '50vw',
    minHeight: '70vh',
    marginTop: '0vh',
    background: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      background: 'rgba(255,255,255,0.55)',
    },
  },
  leftContent: {
    width: 'calc(50%)',
    minHeight: '70vh',
    paddingTop: '130px',
    float: 'right',
    textAlign: 'left',
    paddingRight: '20px',
    lineHeight: '1.5em',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      minHeight: '100vh',
      float: 'none',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      // paddingBottom: '100px',
    },
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      minHeight: '100vh',
      float: 'none',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      // paddingBottom: '100px',
    },
    [theme.breakpoints.down('lg')]: {
      width: 'calc(75%)',
    },
  },
});

const useStyles = makeStyles(styles);
const DividedSection = props => {
  const classes = useStyles();
  const { LeftSection } = props;
  return (
    <FullWidthSection color={props.color} image={props.image} height={props.height}>
      <div className={classes.fullWidthLeft}>
        <div className={classes.leftContent}>
          <LeftSection />
        </div>
      </div>
    </FullWidthSection>
  );
};

export default DividedSection;
