import { makeStyles } from '@material-ui/core/styles';

export const useSearchStyles = makeStyles(theme => ({
  searchWrapper: {
    flex: '1 1 0%',
    boxSizing: ' border-box',
  },
  searchForm: {
    background: 'white',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(1) * 2,
    display: 'block',
    maxWidth: '800px',
  },
  searchInput: {
    fontSize: '1rem',
    padding: theme.spacing(1) * 1.9,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1) * 1.2,
    },
    cursor: 'text',
    textIndent: '30px',
    border: 'none',
    background: 'transparent',
    width: '100%',
    outline: '0',
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: '0',
    marginTop: '-24px',
    color: 'rgba(0,0,0,.87)',
  },
}));

export default { useSearchStyles };
