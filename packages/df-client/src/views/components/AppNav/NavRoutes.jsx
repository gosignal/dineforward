import {
  Star as StarIcon,
  Business as BusinessIcon,
  LocalOffer as LocalOfferIcon,
  Settings as SettingsIcon,
  CreditCard as CreditCardIcon,
  Info as InfoIcon,
  Help as HelpIcon,
} from '@material-ui/icons';

// const baseRoute = 'http://localhost:8000';
const baseRoute = '';

export const navRoutes = [
  {
    link: `${baseRoute}/`,
    name: 'Home',
    Icon: () => <StarIcon />,
  },
  {
    link: `${baseRoute}/business`,
    name: 'Register a buiness',
    Icon: () => <BusinessIcon />,
  },
  {
    link: `${baseRoute}/offerings`,
    name: 'Find a business',
    Icon: () => <LocalOfferIcon />,
  },
  {
    link: `${baseRoute}/settings`,
    name: 'About us',
    Icon: () => <InfoIcon />,
  },
  {
    link: `${baseRoute}/transactions`,
    name: 'FAQ',
    Icon: () => <HelpIcon />,
  },
];

export default navRoutes;
