import React from 'react';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
// import MUIPlacesAutocomplete, { geocodeBySuggestion } from '../MuiPlacesAutocomplete';
import MUIPlacesAutocomplete, {
  geocodeBySuggestion,
  geocodeByPlaceID,
} from 'mui-places-autocomplete';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  search: {
    flex: '1',
  },
  button: {
    flex: '1',
  },
}));

const SearchBox = ({ setPlace }) => {
  const classes = useStyles();
  const router = useRouter();

  /*
  // TO IMPLEMENT
  // React.useEffect(() => {
  //   if (window) {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(function(position) {
  //         var geolocation = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         };
  //         var circle = new google.maps.Circle({
  //           center: geolocation,
  //           radius: position.coords.accuracy,
  //         });
  //         autocomplete.setBounds(circle.getBounds());
  //       });
  //     }
  //   }
  // });
*/
  const [searchState, setSearchState] = React.useState({
    open: false,
    coordinates: null,
    errorMessage: null,
  });
  const onSelected = place => {
    console.log({ place });
    // setPlace(place);
    // var request = {
    //   placeId: place.place_id,
    //   fields: ['name', 'rating', 'formatted_phone_number', 'geometry'],
    // };

    const fieldMappings = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name',
    };

    const parseAddr = place => {
      const address = {};
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (fieldMappings[addressType]) {
          var val = place.address_components[i][fieldMappings[addressType]];
          address[addressType] = val;
        }
      }
      return address;
    };

    geocodeByPlaceID(place.place_id).then(results => {
      console.log('geocoded', { results });
      console.log(parseAddr(results[0]));
    });
  };
  const onClose = () => {
    console.log('closed...');
  };
  return (
    <>
      <h1>Search with Google</h1>
      <MUIPlacesAutocomplete onSuggestionSelected={onSelected} renderTarget={() => <div />} />
    </>
  );
};

export default SearchBox;
