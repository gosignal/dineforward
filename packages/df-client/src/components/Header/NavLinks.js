import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { makeStyles } from '@material-ui/core/styles';

// TODO: Split these off
import IndexPageStyles from '~theme/IndexPageStyles';

const useStyles = makeStyles(IndexPageStyles);

// const HeaderLink = () => {
//   return (
//     <div className={classes.collapse}>
//       <List className={`${classes.list} ${classes.mlAuto}`}>
//         <ListItem className={classes.listItem}>
//           <Button
//             href="#pablo"
//             className={classes.navLink}
//             onClick={e => e.preventDefault()}
//             color="transparent"
//           >
//             Home
//           </Button>
//         </ListItem>
//       </List>
//     </div>
//   );
// };

const NavLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.collapse}>
      <List className={`${classes.list} ${classes.mlAuto}`}>
        <ListItem className={classes.listItem}>
          <Button
            href="#pablo"
            className={classes.navLink}
            onClick={e => e.preventDefault()}
            color="transparent"
          >
            Home
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#pablo"
            className={classes.navLink}
            onClick={e => e.preventDefault()}
            color="transparent"
          >
            About us
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#pablo"
            className={classes.navLink}
            onClick={e => e.preventDefault()}
            color="transparent"
          >
            Products
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#pablo"
            className={classes.navLink}
            onClick={e => e.preventDefault()}
            color="transparent"
          >
            Contact us
          </Button>
        </ListItem>
      </List>
      <List className={`${classes.list} ${classes.mlAuto}`}>
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={`${classes.navLink} ${classes.navLinkJustIcon}`}
          >
            <i className="fab fa-twitter" />
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={`${classes.navLink} ${classes.navLinkJustIcon}`}
          >
            <i className="fab fa-facebook" />
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={`${classes.navLink} ${classes.navLinkJustIcon}`}
          >
            <i className="fab fa-instagram" />
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

export default NavLinks;
