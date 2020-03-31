// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';
import BusinessIcon from '@material-ui/icons/Business';
import CreditCardIcon from '@material-ui/icons/CreditCard';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Restaurants" />
    </ListItem>
  </div>
);
// <ListItem button>
//   <ListItemIcon>
//     <StarIcon />
//   </ListItemIcon>
//   <ListItemText primary="Starred" />
// </ListItem>
// <ListItem button>
//   <ListItemIcon>
//     <SendIcon />
//   </ListItemIcon>
//   <ListItemText primary="Send mail" />
// </ListItem>
// <ListItem button>
//   <ListItemIcon>
//     <DraftsIcon />
//   </ListItemIcon>
//   <ListItemText primary="Drafts" />
// </ListItem>

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Restaurants" />
    </ListItem>
  </div>
);

const baseRoute = '/account/manage';

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

{
  /* <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem> */
}
