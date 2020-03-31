import { makeStyles } from '@material-ui/styles';
import FullWidthSection from './FullWidth';

const styles = theme => ({
  fullWidthLeft: {
    width: '40vw',
    height: '50vh',
    marginTop: '0vh',
    background: '#fff',
  },
  leftContent: {
    width: 'calc(50%)',
    height: '50vh',
    paddingTop: '30px',
    float: 'right',
    textAlign: 'left',
    paddingRight: '20px',
    lineHeight: '1.5em',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(90%)',
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(95%)',
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
