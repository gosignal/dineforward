import {
  Star as StarIcon,
  Business as BusinessIcon,
  LocalOffer as LocalOfferIcon,
  Settings as SettingsIcon,
  CreditCard as CreditCardIcon,
  Info as InfoIcon,
  Help as HelpIcon,
} from '@material-ui/icons';

const baseRoute = 'http://localhost:8000';

export const navRoutes = [
  {
    route: `${baseRoute}`,
    name: 'Home',
    Icon: () => <StarIcon />,
  },
  {
    route: `${baseRoute}/businesses`,
    name: 'Register a buiness',
    Icon: () => <BusinessIcon />,
  },
  {
    route: `${baseRoute}/offerings`,
    name: 'Find a business',
    Icon: () => <LocalOfferIcon />,
  },
  {
    route: `${baseRoute}/settings`,
    name: 'About us',
    Icon: () => <InfoIcon />,
  },
  {
    route: `${baseRoute}/transactions`,
    name: 'FAQ',
    Icon: () => <HelpIcon />,
  },
];

export default navRoutes;
