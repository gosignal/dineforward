import React from 'react';
import { useRouter } from 'next/router';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

import MUIPlacesAutocomplete, {
  geocodeBySuggestion,
  geocodeByPlaceID,
} from 'mui-places-autocomplete';

const config = {
  mappings: {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name',
  },
  fields: ['name', 'rating', 'formatted_phone_number', 'geometry'],
};

const geoutils = {
  parse: place => {
    const address = {};

    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (config.mappings[addressType]) {
        var val = place.address_components[i][config.mappings[addressType]];
        address[addressType] = val;
      }
    }
    return address;
  },
  request: () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy,
        });
        // autocomplete.setBounds(circle.getBounds());
        console.log({ geolocation, circle, bounds: circle.getBounds() });
      });
    }
  },
};
const SearchBox = ({ setPlace }) => {
  const classes = useStyles();
  const router = useRouter();

  const [searchState, setSearchState] = React.useState({
    open: false,
    coordinates: null,
    errorMessage: null,
  });

  const onSelected = place => {
    console.log({ place });
    geocodeByPlaceID(place.place_id).then(results => {
      console.log('geocoded', { results });
      console.log(geoutils.parse(results[0]));
    });
  };
  return (
    <>
      <Typography variant="h3">Search with Google</Typography>
      <MUIPlacesAutocomplete onSuggestionSelected={onSelected} renderTarget={() => <div />} />
    </>
  );
};

export default SearchBox;
