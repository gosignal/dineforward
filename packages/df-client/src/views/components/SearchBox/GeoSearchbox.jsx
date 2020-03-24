import React from 'react';
// import { useRouter } from 'next/router';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import parse from 'autosuggest-highlight/parse';
// import throttle from 'lodash/throttle';
// // import MUIPlacesAutocomplete, { geocodeBySuggestion } from '../MuiPlacesAutocomplete';
// import MUIPlacesAutocomplete, { geocodeBySuggestion } from 'mui-places-autocomplete';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   icon: {
//     color: theme.palette.text.secondary,
//     marginRight: theme.spacing(2),
//   },
//   search: {
//     flex: '1',
//   },
//   button: {
//     flex: '1',
//   },
// }));

// const SearchBox = () => {
//   const classes = useStyles();
//   const router = useRouter();
//   const [searchState, setSearchState] = React.useState({
//     open: false,
//     coordinates: null,
//     errorMessage: null,
//   });
//   const onSelected = place => {
//     console.log(place);

//     // Search in our DB for results
//     router.push(`/search/${place.description}`);
//     // geocodeBySuggestion(place)
//     //   .then(results => {
//     //     if (results.length < 1) {
//     //       setSearchState({
//     //         open: true,
//     //         errorMessage: 'Geocode request completed successfully but without any results',
//     //       });

//     //       return;
//     //     }

//     //     // Just use the first result in the list to get the geometry coordinates
//     //     const { geometry } = results[0];

//     //     const coordinates = {
//     //       lat: geometry.location.lat(),
//     //       lng: geometry.location.lng(),
//     //     };
//     //     console.log(suggestion, coordinates);
//     //   })
//     //   .catch(e => {
//     //     console.log(e);
//     //     setSearchState({ open: true, errorMessage: e.message });
//     //   });
//   };
//   const onClose = () => {
//     console.log('closed...');
//   };
//   return (
//     <>
//       <MUIPlacesAutocomplete onSuggestionSelected={onSelected} renderTarget={() => <div />} />
//     </>
//   );
// };

const SearchBox = () => {
  return <h1>Test</h1>;
};
export default SearchBox;
