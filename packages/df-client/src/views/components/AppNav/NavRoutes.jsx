import Email from '@material-ui/icons/Email';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import FAQ from '@material-ui/icons/QuestionAnswer';
import Restaurant from '@material-ui/icons/Restaurant';

const baseRoute = '';

export const navRoutes = [
  {
    link: `${baseRoute}/`,
    name: 'Home',
    Icon: Home,
  },
  {
    link: `${baseRoute}/about`,
    name: 'About us',
    Icon: Info,
  },
  {
    link: `${baseRoute}/faq`,
    name: 'FAQ',
    Icon: FAQ,
  },
  {
    link: `${baseRoute}/restaurants`,
    name: 'Are you a restaurant?',
    Icon: Restaurant,
  },
  {
    link: `${baseRoute}/contact`,
    name: 'Contact',
    Icon: Email,
  },
];

export default navRoutes;
