import React, { createContext, useState, useContext } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme(); // "light" or "dark"
  const [isDark, setIsDark] = useState(colorScheme === 'light');

  const theme = {
    dark: {
      background: '#000',
      text: '#fff',
      button: '#444',
    },
    light: {
      background: '#fff',
      text: '#000',
      button: '#ddd',
    },
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        theme: isDark ? theme.dark : theme.light,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
