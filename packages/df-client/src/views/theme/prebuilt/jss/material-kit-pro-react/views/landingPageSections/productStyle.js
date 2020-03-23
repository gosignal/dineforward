import { title, grayColor } from '~theme/prebuilt/jss/material-kit-pro-react.js';

const productStyle = {
  section: {
    padding: '70px 0',
    textAlign: 'center',
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  description: {
    color: grayColor[0],
  },
};

export default productStyle;
