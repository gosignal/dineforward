import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// export const {
//   Consumer: RootConsumer,
//   Provider: RootProvider
// } = React.createContext<TRootModel>()

const Context = createContext({
  role: 'user',
  type: 'light',
});
const { Provider } = Context;

const reducer = (state, action) => {
  switch (action.type) {
    case 'role':
      const newState = {
        ...state,
        //todo add logic with auth here
      };
      return newState;
    case 'type':
      return { ...state, type: state.type === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

const AdminProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('@media (prefers-color-scheme: dark)');
  const [state, dispatch] = useReducer(reducer, {
    type: prefersDarkMode ? 'dark' : 'light',
    role: 'user',
  });

  const theme = createMuiTheme({
    direction: state.direction,
    palette: {
      type: state.type,
      primary: indigo,
      secondary: red,
      error: red,
    },
    typography: {
      //   header: {
      //     fontSize: '1rem',
      //   },
      subtitle1: {
        fontSize: '0.8125rem',
      },
      button: {
        fontWeight: 400,
        textTransform: 'initial',
      },
      body1: {
        fontSize: '0.875rem',
      },
    },
    shape: {
      borderRadius: 4,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider value={[state, dispatch]}>{children}</Provider>
    </ThemeProvider>
  );
};

export default AdminProvider;
export const useAdminState = () => useContext(Context);
