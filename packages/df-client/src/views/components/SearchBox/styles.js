import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  content: {
    flex: '1 0 auto',
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  SearchInput: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  search: {
    flex: '1',
  },
  button: {
    flex: '1',
  },
}));

export default useStyles;
