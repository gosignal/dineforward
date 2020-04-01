import React from 'react';
import { useRouter } from 'next/router';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { useGeolocation, checkGeoPermissions } from '~utils/hooks/useGeolocation';
import { makeStyles } from '@material-ui/styles';
import MUIPlacesAutocomplete, {
  geocodeBySuggestion,
  geocodeByPlaceID,
} from 'mui-places-autocomplete';

const config = {
  mappings: {
    name: 'main_text',
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
      navigator.geolocation.getCurrentPosition(position => {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        var circle = new window.google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy,
        });
        // autocomplete.setBounds(circle.getBounds());
        return { geolocation, circle, bounds: circle.getBounds() };
      });
    }
    return {};
  },
};
const SearchBox = ({ setPlace, ctx }) => {
  const classes = useStyles();
  const router = useRouter();
  const geo = useGeolocation();
  // const LocationContext = React.useContext(ctx);
  const [searchState, setSearchState] = React.useState({
    open: false,
    coordinates: false,
    errorMessage: null,
  });

  const onSelected = place => {
    geocodeByPlaceID(place.place_id).then(results => {
      const geoPlace = { ...geoutils.parse(results[0]), ...place };

      setPlace(geoPlace);
    });
  };

  const enhancePredictions = inputValue => {
    // const { geolocation } = geoutils.request();

    return {
      input: inputValue,
      location: { lat: () => geo.lattitude, lng: () => geo.longitude },
      radius: 50000,
    };
  };

  return (
    <div className={classes.root}>
      <MUIPlacesAutocomplete
        onSuggestionSelected={onSelected}
        renderTarget={() => <div className={classes.root} />}
        textFieldProps={{
          className: classes.SearchInput,
          variant: 'filled',
          label: 'Search for your business',
        }}
      />
    </div>
  );
};

export default SearchBox;
