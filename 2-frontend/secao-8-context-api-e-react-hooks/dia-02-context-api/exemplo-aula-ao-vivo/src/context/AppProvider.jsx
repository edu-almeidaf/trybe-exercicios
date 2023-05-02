import PropTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChangeTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  const values = useMemo(() => ({
    isDarkTheme,
    handleChangeTheme,
  }), [isDarkTheme]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
