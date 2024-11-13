import {createContext, ReactNode, useState} from 'react';
import {Appearance} from 'react-native';
import NavBar from 'react-native-system-navigation-bar';

import {darkTheme, lightTheme} from './themes';

const ThemeContext = createContext({
  isDark: false,
  colors: {
    primary: '',
    onPrimary: '',
    accent: '',
    onAccent: '',
    background: '',
    card: '',
    text: '',
    textSecondary: '',
    placeholder: '',
    border: '',
    error: '',
    success: '',
    notification: '',
  },
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDark, setIsDark] = useState(false);
  // Supposed to be Appearance.getColorScheme() === "dark" but simple boolean for now

  const toggleTheme = () => {
    setIsDark(currentValue => {
      NavBar.setBarMode(currentValue ? 'dark' : 'light');
      return !currentValue;
    });
  };

  const colors = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
