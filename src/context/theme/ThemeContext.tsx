import {createContext, ReactNode, useState} from 'react';
import {Appearance} from 'react-native';

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

  const toggleTheme = () => setIsDark(currentValue => !currentValue);

  const colors = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
