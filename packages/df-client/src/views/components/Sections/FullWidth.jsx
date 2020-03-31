import { makeStyles } from '@material-ui/styles';
const styles = theme => ({
  fullWidthPanel: {
    width: '100vw',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    color: '#000',
    backgroundImage: ({ image }) => `url('${image}')`,
    backgroundColor: ({ color }) => `${color}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'cover',
  },
});

const useStyles = makeStyles(styles);

const FullWidthSection = props => {
  const { children, image, color, height } = props;
  const classes = useStyles({ image, color, height });
  return <div className={classes.fullWidthPanel}>{children}</div>;
};

export default FullWidthSection;
