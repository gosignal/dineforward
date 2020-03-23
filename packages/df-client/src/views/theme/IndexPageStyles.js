import { grey } from '@material-ui/core/colors';
import { container, title, main, whiteColor, blackColor, mainRaised } from './dineforward-theme.js';

const IndexPageStyle = {
  container: {
    // color: blackColor,
    ...container,
    zIndex: '2',
  },
  link: {
    color: whiteColor,
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  subtitle: {
    fontWeight: 300,
  },
  main: {
    ...main,
  },
  mainRaised: {
    ...mainRaised,
  },
  block: {
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto',
  },
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
  left: {
    float: 'left!important',
    display: 'block',
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right',
  },
  icon: {
    width: '18px',
    height: '18px',
    top: '3px',
    position: 'relative',
  },
  headerDark: {},
  whiteTitle: {
    ...title,
    color: whiteColor,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  whiteSubtitle: {
    color: whiteColor,
    fontWeight: 500,
    display: 'inline-block',
    position: 'relative',
    marginTop: '20px',
    minHeight: '22px',
    textDecoration: 'none',
  },
  whiteCopy: {
    color: grey[400],
    fontWeight: 300,
    fontSize: '1.3em',
    lineHeight: '2.2em',
    display: 'inline-block',
    position: 'relative',
    marginTop: '10px',
    minHeight: '15px',
    textDecoration: 'none',
  },
  whiteCaption: {
    color: grey[400],
    fontWeight: 500,
    lineHeight: '2.2em',
    display: 'inline-block',
    position: 'relative',
    marginTop: '10px',
    textDecoration: 'none',
  },
};

export default IndexPageStyle;
