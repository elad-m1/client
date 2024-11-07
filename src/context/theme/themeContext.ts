import {createContext} from 'react';

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
  },
  toggleTheme: () => {},
});

export default ThemeContext;
