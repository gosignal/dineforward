import {
  Star as StarIcon,
  Business as BusinessIcon,
  LocalOffer as LocalOfferIcon,
  Settings as SettingsIcon,
  CreditCard as CreditCardIcon,
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
    name: 'My Businesses',
    Icon: () => <BusinessIcon />,
  },
  {
    route: `${baseRoute}/offerings`,
    name: 'My Offerings',
    Icon: () => <LocalOfferIcon />,
  },
  {
    route: `${baseRoute}/settings`,
    name: 'Account Settings',
    Icon: () => <SettingsIcon />,
  },
  {
    route: `${baseRoute}/transactions`,
    name: 'Transactions',
    Icon: () => <CreditCardIcon />,
  },
];

export default navRoutes;
