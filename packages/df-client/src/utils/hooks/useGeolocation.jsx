import React from 'react';

const load = async positionOptions =>
  navigator.geolocation.getCurrentPosition(position => position, error => error, positionOptions);

export const useGeolocation = positionOptions => {
  const [position, setPosition] = React.useState({});

  React.useEffect(() => {
    if (window !== undefined) {
      const listener = navigator.geolocation.watchPosition(
        positionUpdate => {
          setPosition(positionUpdate);
        },
        () => null,
        positionOptions,
      );
      return () => navigator.geolocation.clearWatch(listener);
    }
  }, []);

  return position;
};

export const checkGeoPermissions = (approve, deny, settings) => {
  navigator.permissions.query({ name: 'geolocation' }).then(({ state }) => {
    if (state == 'granted') return state;
    if (state == 'denied') return state;
    if (state == 'prompt') navigator.geolocation.getCurrentPosition(approve, deny, settings);
  });
};
