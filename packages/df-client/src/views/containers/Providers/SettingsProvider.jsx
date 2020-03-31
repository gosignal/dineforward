import React, { useState } from 'react';

import AppSettingsContext from '~ctx/AppContext';

// Save settings to local storage
const storage = {
  getItem(key) {
    if (localStorage) {
      return localStorage.getItem(key);
    }
  },
  setItem(key, value) {
    if (localStorage) {
      return localStorage.setItem(key, value);
    }
  },
};
const AppSettingsProvider = props => {
  // todo: add useMediaQuery
  //   const [darkMode, setDarkMode] = useState(storage.getItem('darkMode') === 'true');
  //   const onSetDarkMode = darkMode => {
  //     setDarkMode(darkMode);
  //     storage.setItem('darkMode', darkMode);
  //   };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <AppSettingsContext.Provider
      value={{
        // theme: [darkMode, onSetDarkMode],
        drawer: [drawerOpen, toggleDrawer],
      }}
    >
      {props.children}
    </AppSettingsContext.Provider>
  );
};

export default AppSettingsProvider;
