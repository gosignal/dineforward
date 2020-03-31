import { makeStyles } from '@material-ui/styles';
const styles = theme => ({
  fullWidthPanel: {
    width: '100vw',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: ({ image }) => `url('${image}')`,
    backgroundColor: ({ color }) => `${color}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'contain',
  },
});

const useStyles = makeStyles(styles);

const FullWidthSection = props => {
  const { children, image, color, height } = props;
  const classes = useStyles({ image, color, height });
  return <div className={classes.fullWidthPanel}>{children}</div>;
};

export default FullWidthSection;
