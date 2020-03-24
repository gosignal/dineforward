export default undefined;
// import * as React from 'react';

// import * as PropTypes from 'prop-types';

// import {
//   withStyles,
//   Theme,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Drawer,
//   Hidden,
//   Divider,
//   Tooltip,
// } from '@material-ui/core';

// import PersonIcon from '@material-ui/icons/Person';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import MenuIcon from '@material-ui/icons/Menu';

// import CookieBanner from '~components/CookieBanner';

// // import { UserContext, UserContextConsumer } from './App';
// import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

// const styles = (theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//     height: '100%',
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//   },
//   appBar: {
//     position: 'absolute',
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   navIconHide: {
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   toolbarMixin: theme.mixins.toolbar,
//   toolbar: {
//     color: theme.palette.common.white,
//     backgroundColor: theme.palette.primary.main,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       position: 'relative',
//     },
//   },
//   contentTitle: {
//     flex: 1,
//     [theme.breakpoints.up('md')]: {
//       textAlign: 'left',
//     },
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   contentContainer: theme.typography.body1,
// });

// const useStyles = makeStyles(styles);

// const drawer = () => {
//   const classes = useStyles();
//   return (
//     <div>
//       <Toolbar className={classes.toolbar}>
//         <Typography variant="title" color="inherit" component="h1" noWrap>
//           asdasd
//         </Typography>
//       </Toolbar>
//       <Divider />
//     </div>
//   );
// };

// const WorkingArea = props => {
//   const { children } = props;
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar className={classes.appBar}>
//         <Toolbar>
//           <Tooltip title="Navigation">
//             <IconButton color="inherit" aria-label="open drawer">
//               <MenuIcon />
//             </IconButton>
//           </Tooltip>
//           <Typography
//             className={classes.contentTitle}
//             align="center"
//             variant="title"
//             component="h2"
//             color="inherit"
//             noWrap
//           >
//             Tesrt
//           </Typography>

//           <Tooltip title="User Profile">
//             <IconButton color="inherit" aria-label="profile">
//               <PersonOutlineIcon />
//             </IconButton>
//           </Tooltip>
//         </Toolbar>
//       </AppBar>
//       <Hidden mdUp>
//         <Drawer
//           variant="temporary"
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Hidden>
//       <Hidden smDown implementation="css">
//         <Drawer
//           variant="permanent"
//           open
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Hidden>
//       <main className={classes.content}>
//         <div className={classes.toolbarMixin} />
//         <div className={classes.contentContainer}>{children}</div>
//       </main>
//     </div>
//   );
// };

// export default WorkingArea;
